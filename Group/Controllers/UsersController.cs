using Group.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Microsoft.AspNetCore.Hosting;



namespace Group.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
            private readonly IConfiguration _configuration;
            private readonly IWebHostEnvironment _webHostEnvironment;

            public UsersController(IConfiguration configuration, IWebHostEnvironment webHostEnvironment)
            {
                _webHostEnvironment = webHostEnvironment;
                _configuration = configuration;
            }


            [HttpGet]
            public JsonResult Get()
            {
                string query = @"
                            select Name, DateOfBirth, AstrologicalSign, MotherLand, Profile, 
                            Phrases, Photo1, Photo2, Photo3, Photo4, Instagram, Tg from
                            dbo.Students
                            ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        dt.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult(dt);
            }

            [HttpPost]
            public JsonResult Post(Student students)
            {
                string query = @"insert into dbo.Students
                            (Name, DateOfBirth, AstrologicalSign, MotherLand, Profile, 
                            Phrases, Photo1, Photo2, Photo3, Photo4, Instagram, Tg)
                            values(@Name, @DateOfBirth, @AstrologicalSign, @MotherLand, @Profile, 
                            @Phrases, @Photo1, @Photo2, @Photo3, @Photo4, @Instagram, @Tg )
                            ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("Name", students.Name);
                        myCommand.Parameters.AddWithValue("@DateOfBirth", students.DateOfBirth);
                        myCommand.Parameters.AddWithValue("@AstrologicalSign", students.AstrologicalSign);
                        myCommand.Parameters.AddWithValue("@MotherLand", students.MotherLand);
                        myCommand.Parameters.AddWithValue("@Profile", students.MotherLand);
                        myCommand.Parameters.AddWithValue("@Phrases", students.Phrases);
                        myCommand.Parameters.AddWithValue("@Photo1", students.Photo1);
                        myCommand.Parameters.AddWithValue("@Photo2", students.Photo2);
                        myCommand.Parameters.AddWithValue("@Photo3", students.Photo3);
                        myCommand.Parameters.AddWithValue("@Photo4", students.Photo4);
                        myCommand.Parameters.AddWithValue("@Instagram", students.Instagram);
                        myCommand.Parameters.AddWithValue("@Tg", students.Tg);
                        myReader = myCommand.ExecuteReader();
                        dt.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Added successufully");
            }



            [HttpPut]
            public JsonResult Put(Student students)
            {
                string query = @"
                            update dbo.Students
                            set Name = @Name, 
                            DateOfBirth = @DateOfBirth,
                            AstrologicalSign = @AstrologicalSign,
                            MotherLand =  @MotherLand,
                            Profile = @Profile,
                            Phrases =  @Phrases,
                            Photo1 = @Photo1,
                            Photo2 =  @Photo2,
                            Photo3 =  @Photo3,
                            Photo4 =  @Photo4,
                            Instagram = @Instagram,
                            Tg = @Tg
                            where id= @id
                            ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("id", students.Id);
                        myCommand.Parameters.AddWithValue("Name", students.Name);
                        myCommand.Parameters.AddWithValue("@DateOfBirth", students.DateOfBirth);
                        myCommand.Parameters.AddWithValue("@AstrologicalSign", students.AstrologicalSign);
                        myCommand.Parameters.AddWithValue("@MotherLand", students.MotherLand);
                        myCommand.Parameters.AddWithValue("@Profile", students.MotherLand);
                        myCommand.Parameters.AddWithValue("@Phrases", students.Phrases);
                        myCommand.Parameters.AddWithValue("@Photo1", students.Photo1);
                        myCommand.Parameters.AddWithValue("@Photo2", students.Photo2);
                        myCommand.Parameters.AddWithValue("@Photo3", students.Photo3);
                        myCommand.Parameters.AddWithValue("@Photo4", students.Photo4);
                        myCommand.Parameters.AddWithValue("@Instagram", students.Instagram);
                        myCommand.Parameters.AddWithValue("@Tg", students.Tg);
                        myReader = myCommand.ExecuteReader();
                        dt.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Updated successufully");
            }


            [HttpDelete("{id}")]
            public JsonResult Delete(int id)
            {
                string query = @"
                            delete from dbo.Students
                            where id= @id
                            ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("id", id);
                        myReader = myCommand.ExecuteReader();
                        dt.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Deleted successufully");
            }
        [Route("Savefile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = _webHostEnvironment.ContentRootPath + "/Models/Photos" + fileName;
                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult (fileName);

            }
            catch (Exception )
            {
                return new JsonResult("ananymous.jpg");

            }
        }
        }
    }


