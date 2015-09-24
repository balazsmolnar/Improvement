using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Improvement.Controllers
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string Owner { get; set; }
    }

    public class Improvement
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Points { get; set; }
        public int UserPoints { get; set; }
        public string Owner { get; set; }
        public IList<Comment> Comments { get; set; }
    }

    interface IImprovementRepository
    {
        Improvement Get(int id);
        void Save(Improvement improvement);
        IEnumerable<Improvement> GetAll();
        void AddComment(Improvement improvement, Comment comment, string userName);
    }
}
