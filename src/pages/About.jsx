
const About = () => {
    return ( 
        <div className=" bg-red max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col bg-gray-300 ">

            <div className="content bg-white p-8 rounded-2xl m-1 " >
            <h1 class="text-3xl font-bold text-center mb-6  bg-red">About Us</h1>
      <p class=" text-gray-700 text-lg text-center mb-8"> 
        Welcome to <em className="text-blue-600">AUDITFYX</em>, your trusted partner in ensuring accuracy,realiability,and comliance. 
        Our team of experienced auditors provides expert auditing services to help organizations like yours maintain transparency, mitigate risks, and achieve their goals.

      </p> 
            </div>

        <div className="content  bg-white p-8 rounded-2xl m-1 ">
        <h2 class="text-3xl font-bold mb-6 text-center" > <b>Our Mission</b></h2>
      <p class="text-gray-700 text-lg text-center mb-8">
        We aim to provide high-quality independent, and insightful auditing services that empower organizations to make data-driven decisions, enhance performance, and demonstrate accountability.

      </p>

        </div>

      <div className="content  bg-white p-8 rounded-2xl m-1">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Team</h2>
      <p class="text-gray-700 text-lg text-center mb-8">
        Our team consists of experienced professionals dedicated to excellence,each with extensive experience in various industries and auditing disciplines
      </p>
      </div>
    
        </div>
     );
}
 
export default About;