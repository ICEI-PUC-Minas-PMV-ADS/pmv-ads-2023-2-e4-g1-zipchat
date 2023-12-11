using System.Threading.Tasks;
using Xunit;
using Moq;
using back_zipchat.Models;
using back_zipchat.Services;
using MongoDB.Driver;
using MongoDB.Bson;

public class AppointmentSchedulingTest
{

    // Consultando id inexistente
    [Fact]
    public async Task GetAsyncById_WhenNoDocumentFound_ShouldReturnNull()
    {
        // Arrange
        string id = "asdadasdas";
        var mockCollection = new Mock<IMongoCollection<CalendarModel>>();
        mockCollection.Setup(x => x.Find(It.IsAny<FilterDefinition<CalendarModel>>()))
                      .Returns(Mock.Of<IAsyncCursor<CalendarModel>>(_ => _.Current = null));

        var calendarService = new CalendarService(mockCollection.Object);

        // Act
        var result = await calendarService.GetAsyncById(id);

        // Assert
        Assert.Null(result);
    }

    //Simulando exceção durante consulta ao BD
    [Fact]
    public async Task GetAsyncById_ExceptionOccurs()
    {
        // Arrange
        string id = "asdsadasda";
        var mockCollection = new Mock<IMongoCollection<CalendarModel>>();
        mockCollection.Setup(x => x.Find(It.IsAny<FilterDefinition<CalendarModel>>()))
                      .Throws(new MongoException("Falha na consulta ao BD"));

        var calendarService = new CalendarService(mockCollection.Object);

        // Act and Assert
        await Assert.ThrowsAsync<MongoException>(async () => await calendarService.GetAsyncById(id));
    }

    //Simulando retorno de uma lista vazia
    [Fact]
    public async Task GetAsync_NotFound()
    {
        // Arrange
        //mockCollection irá retornar uma lista vazia
        var mockCollection = new Mock<IMongoCollection<CalendarModel>>();
        mockCollection.Setup(x => x.Find(It.IsAny<BsonDocument>()))
                      .Returns(Mock.Of<IAsyncCursor<CalendarModel>>(_ => _.Current = new List<CalendarModel>()));

        var calendarService = new CalendarService(mockCollection.Object);

        // Act
        var result = await calendarService.GetAsync();

        // Assert
        Assert.Empty(result);
    }


    // Retornando do banco
    [Fact]
    public async Task GetAsync_WhenDocumentsFound_ShouldReturnNonEmptyList()
    {
        // Arrange
        var mockCollection = new Mock<IMongoCollection<CalendarModel>>();

        // Configuração para retornar alguns documentos ao chamar ToListAsync
        mockCollection.Setup(x => x.Find(It.IsAny<BsonDocument>()).ToListAsync())
                      .ReturnsAsync(new List<CalendarModel>
                      {
                          new CalendarModel { Id = "1", paciente = "Guilherme", anamneseId = "1", medico = "Raul", data = DateTime.Now, evento = "aa" }
                      });

        var calendarService = new CalendarService(mockCollection.Object);

        // Act
        var result = await calendarService.GetAsync();

        // Assert
        Assert.NotNull(result);
        Assert.NotEmpty(result);
        Assert.Equal(1, result.Count); // Garante que o número de documentos corresponde ao esperado
    }

}
