import Link from "next/link";
import Image from "next/image";
import image from "../../public/profile.jpg"

export default function Home() {
  return (
   <>

  {/* -------------------------- Header div -------------------------------- */}

    <div className="bg-blue-400 w-100 h-28 text-right text-black text-2xl font-bold flex justify-evenly p-10">
     
      <div className="text-4xl font-bold h-100 text-pink-600">

        

      </div>
      
      
    <Link href={"/About"}> About </Link>

    <Link href={'/Portfolio'}> Portfolio </Link>

    <Link href={'/Contact-us'}> Contact US</Link>


    </div>



  {/* -------------------------- Introduction-------------------------------- */}

    <div className='flex'>

    <div className='w-45 h-80 p-10'>

      <h1 className='text-3xl font-bold m-4 text-white-500'>ASMA ABDUL QADIR</h1>

      <h2 className=" text-3xl m-4 font-bold text-pink-500 ml-14"> Web Developer </h2>

    <p className='text-2xl m-2 '>As a curious and skilled web developer and UI/UX designer, I am building innovative digital solutions.With a blend of technical skills and creative flairs,I bring ideas to life. With expertise in both front-end and back-end technologies.</p>
    </div>
   
   {/* -------------------------- Image div -------------------------------- */}
   
    <div className=' w-90 h-500 mr-20 mt-10'>

    <Image src={'/profile.jpg'} 
    width={800}
    height={500} 
    alt="picture"   
    />
    </div>

</div>


      {/* -------------------------- Footer div -------------------------------- */}

 <div className="bg-rgb-500 w-full h-20 mt-auto flex justify-center items-center fixed bottom-0 ">

    <div className="flex justify-evenly p-40 text-black">

 <Link href={'https://www.linkedin.com/in/'}>   

<Image src={'/linkedin.png'}
      alt="linkedin"
      width={30}
      height={30}
/>
<p>LinkedIn</p>

</Link>
</div>

<div className="flex justify-evenly p-40 text-black">

<Link href={'https://github.com/'}>  

<Image src={'/github.jpeg'}
      alt="github"
      width={30}
      height={30}
/>
<p>Github</p>

</Link>

</div>

<div className="flex justify-evenly p-40 text-black">

<Link href={'https://www.facebook.com/'}>  

<Image src={'/facebook.png'}
    alt="facebook"
    width={30}
    height={30}
/>
<p>Facebook</p>

</Link>

</div>


 </div>

   </>
  );
}