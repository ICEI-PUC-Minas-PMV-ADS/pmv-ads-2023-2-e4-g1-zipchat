using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class Root
    {
        public string model { get; set; }
        public string prompt { get; set; }
        public int max_tokens { get; set; }
        public int temperature { get; set; }
    }
}
