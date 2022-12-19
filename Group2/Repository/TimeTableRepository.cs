using Group2.Interface;
using Group2.Models;
using Microsoft.EntityFrameworkCore;

namespace Group2.Repository
{
    public class TimeTableRepository: ITimeTable
    {
        readonly DataBaseContext _dbContext = new();

        public TimeTableRepository(DataBaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<TimeTable> GetTimeTableDetails()
        {
            try
            {
                return _dbContext.TimeTable.ToList();
            }
            catch
            {
                throw;
            }
        }

        public TimeTable GetTimeTableDetails(int id)
        {
            try
            {
                TimeTable? timeTable = _dbContext.TimeTable.Find(id);
                if (timeTable != null)
                {
                    return timeTable;
                }
                else
                {
                    throw new ArgumentNullException();
                }
            }
            catch
            {
                throw;
            }
        }

        public void AddTimeTable(TimeTable timeTable)
        {
            try
            {
                _dbContext.TimeTable.Add(timeTable);
                _dbContext.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void UpdateTimeTable(TimeTable timeTable)
        {
            try
            {
                _dbContext.Entry(timeTable).State = EntityState.Modified;
                _dbContext.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public TimeTable DeleteTimeTable(int id)
        {
            try
            {
                TimeTable? timeTable = _dbContext.TimeTable.Find(id);

                if (timeTable != null)
                {
                    _dbContext.TimeTable.Remove(timeTable);
                    _dbContext.SaveChanges();
                    return timeTable;
                }
                else
                {
                    throw new ArgumentNullException();
                }
            }
            catch
            {
                throw;
            }
        }

        public bool CheckTimeTable(int id)
        {
            return _dbContext.TimeTable.Any(e => e.Id == id);
        }
    }
}

