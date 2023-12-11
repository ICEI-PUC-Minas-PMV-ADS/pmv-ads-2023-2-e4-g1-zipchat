using back_zipchat.Models;
using System.Linq.Expressions;

namespace back_zipchat.Repository
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {
        bool Insert(TEntity entity);
        bool Update(TEntity entity);
        bool Delete(TEntity entity);
        IList<TEntity> SearchFor(Expression<Func<TEntity, bool>> predicate);
        IList<TEntity> GetAll();
        TEntity GetById(Guid id);
    }
}
