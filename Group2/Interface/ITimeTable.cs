using Group2.Models;

namespace Group2.Interface
{
    public interface ITimeTable
    {
            public List<TimeTable> GetTimeTableDetails();
            public TimeTable GetTimeTableDetails(int id);
            public void AddTimeTable(TimeTable timeTable);
            public void UpdateTimeTable(TimeTable timeTable);
            public TimeTable DeleteTimeTable(int id);
            public bool CheckTimeTable(int id);
        
    }
}
