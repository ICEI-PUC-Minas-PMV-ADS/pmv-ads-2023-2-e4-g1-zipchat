using back_zipchat.Configuration;
using back_zipchat.Models;
using back_zipchat.Services;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Moq;
using Xunit;

namespace zipchat_test;

public class MongoDBTeste
{

    private readonly IMongoCollection<AnamneseModel> _anamneseCollectionMock;
    private readonly MongoDBService _mongoDBService;

    public MongoDBTeste()
    {
        // Configurar o mock do IMongoCollection
        _anamneseCollectionMock = new Mock<IMongoCollection<AnamneseModel>>().Object;

        // Injetar o mock no serviço
        _mongoDBService = new MongoDBService(
            Options.Create(new MongoDBSettings
            {
                ConnectionURI = "mongodb://root:password@localhost:27017/anamnese?authSource=admin",
                DatabaseName = "zipchat_db",
                CollectionName = "anamnese"
            })
        );
    }

    private readonly IMongoCollection<AnamneseModel> _anamneseCollection;

    public async Task CreateAsync(AnamneseModel anamnese)
    {
        // Verificar se o campo sintomas excede o limite de caracteres permitido
        if (anamnese.sintomas?.Length > 100)
        {
            throw new ExceededCharacterLimitException(nameof(anamnese.sintomas));
        }

        await _anamneseCollection.InsertOneAsync(anamnese);
        return;
    }

    //Registrar histórico do paciente | Teste OK
    [Fact]
    public async Task CreateAnamnese_ValidModel_ReturnsAnamneseWithID()
    {
        // Arrange
        AnamneseModel anamnese = new AnamneseModel
        {
            usuario = "Usuário Teste",
            sintomas = "Febre",
            resultadoIA = "Recorrer ao médico"
        };

        // Act
        await _mongoDBService.CreateAsync(anamnese);
        var result = anamnese;


        // Verifique se foi adicionado ao contexto do banco de dados
        var anamneseNoBanco = await _mongoDBService.GetAsyncById(result.Id);
        Assert.Equivalent(result, anamneseNoBanco);
    }


    // Exceção personalizada para representar a ausência de um campo obrigatório
    public class MissingFieldException : Exception
    {
        public MissingFieldException(string fieldName)
            : base("Ausência de um campo obrigatório")
        { }
    }

    [Fact]
    public async Task createAnamneseWithMissingField()
    {
        AnamneseModel anamnese = new AnamneseModel
        {
            usuario = "guilherme",
            resultadoIA = "procurar um medico mais proximo"
            // Campo sintomas faltando
        };

        //Act e Assert
        await Assert.ThrowsAsync<MissingFieldException>(() => _mongoDBService.CreateAsync(anamnese));
    }

    //Recuperando anamnese | Teste OK
    [Fact]
    public async Task GetAsyncById_ReturnsDocument()
    {
        // Arrange
        string testId = "test_id";
        var expectedDocument = new AnamneseModel { Id = testId };

        var asyncCursorMock = new Mock<IAsyncCursor<AnamneseModel>>();
        asyncCursorMock
            .Setup(cursor => cursor.FirstOrDefaultAsync(default))
            .ReturnsAsync(expectedDocument);

        // Act
        var result = await _mongoDBService.GetAsyncById(testId);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(testId, result.Id);
    }


    // Simulando a rrecuperação de um ID nexistente | Simulando cenário
    public async Task GetAsyncById_ExceptionDuringRetrieval()
    {
        string id = "teste";

        // Simula exceção para recuperar o ID
        _mongoDBService.Setup(servoce => service.GetAsyncById(id)).Returns(Task.FromException<AnamneseModel>(new Exception("Id inexistente")));

        //Act
        var result = await _mongoDBService.GetAsyncById(id);

        //Assert
        Assert.Null(result);

    }

    public class ExceededCharacterLimitException : Exception
    {
        public ExceededCharacterLimitException(string fieldName)
            : base($"O campo {fieldName} excedeu o limite de caracteres permitido")
        { }
    }

    [Fact]
    public async Task createAnamneseWithExceededCharacterLimit()
    {
        AnamneseModel anamnese = new AnamneseModel
        {
            usuario = "guilherme",
            resultadoIA = "procurar um medico mais proximo",
            sintomas = new string('A', 101) // Simtomas com maiss de 100 caracteres
        };

        // Act e Assert
        await Assert.ThrowsAsync<ExceededCharacterLimitException>(() => _mongoDBService.CreateAsync(anamnese));
    }
}
