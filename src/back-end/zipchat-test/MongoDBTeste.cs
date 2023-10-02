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

    [Fact]
    public async Task CreateAnamnese_ValidModel_ReturnsAnamneseWithID()
    {
        // Arrange
        AnamneseModel anamnese = new AnamneseModel
        {
            usuario = "Usuário Teste",
            sintomas = "Febre",
            resultadoIA = "resultado exemplo do chatgpt"
        };

        // Act
        await _mongoDBService.CreateAsync(anamnese);
        var result = anamnese;


        // Verifique se o usuário foi adicionado ao contexto do banco de dados
        var anamneseNoBanco = await _mongoDBService.GetAsyncById(result.Id);
        Assert.Equivalent(result, anamneseNoBanco);
    }
    [Fact]
    public async Task GetAsyncById_ReturnsDocument()
    {
        // Arrange
        string testId = "test_id";
        var expectedDocument = new AnamneseModel { Id = testId /* outros campos */ };

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
}
