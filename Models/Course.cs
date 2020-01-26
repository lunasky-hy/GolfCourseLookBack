using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GolfCourseLookBack.Models
{
    public class Course
    {
        public int Id { get; set; }
        public int ShotNaviId { get; set; }
        public string FieldName { get; set; }
        public string CourseName { get; set; }
        public string CourseURLId { get; set; }
    }
}
