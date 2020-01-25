using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GolfCourseLookBack.Models
{
    public class Field
    {
        public int Id { get; set; }
        public int ShotNaviId { get; set; }
        public string Name { get; set; }
        public string CourseList { get; set; }
        public string CourseURLId { get; set; }
    }
}
