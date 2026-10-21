import React, { useRef, useState } from 'react'

const Scrool = () => {
  
    const  homeref =useRef(null)
   const  aboutref =useRef(null)
  const  helpref =useRef(null)
     const  proectref =useRef(null)

const handlehome=()=>{
homeref.current.scrollIntoView({behavior:'smooth'})


}
const handleabout=()=>{
    aboutref.current.scrollIntoView({behavior:'smooth'})

    
}
const handlehelp=()=>{
    helpref.current.scrollIntoView({behavior:'smooth'})

    
}
const handleproject=()=>{
    proectref.current.scrollIntoView({behavior:'smooth'})

    
}



  return (
<>
  <div className='praent'>
<div>
 <h1>LOGO</h1>

</div>

<div >
    <button onClick={handlehome}>HOME</button>
     <button onClick={handleabout}>ABOUT</button>
    <button onClick={handlehelp}>HELP</button>
    <button onClick={handleproject}>PROJECT</button>


</div>


<section>
    <h1 ref={homeref}>HOme</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque enim voluptatem, nesciunt incidunt quas harum! Vero fugiat saepe perferendis? Ab dicta numquam possimus tenetur rerum vel illum dignissimos totam?
    Molestias itaque beatae tempora accusantium nisi voluptatem illo pariatur est. Harum consequuntur expedita, ipsam dignissimos excepturi molestiae fuga corporis illo quam recusandae quaerat dolorem cum similique odio eos, nihil deleniti?
    Consequuntur at molestias dicta minus doloremque. Voluptas nam quia velit odio recusandae perferendis. Eveniet impedit laudantium nihil odio hic, eius voluptatum tempora magni, est iusto tempore eum repellat nobis. Excepturi.
    Minus, illo, dicta aliquam magnam mollitia voluptatem sed doloribus perferendis, tempore suscipit architecto tenetur quam itaque fugit inventore rerum voluptas quasi dolor quis debitis tempora dolorem quidem nobis et? Temporibus.
    Ea ut iusto similique, quas voluptatum vel doloremque deserunt dolorem tenetur, incidunt dolore reprehenderit quidem inventore voluptas eius ex culpa laboriosam maxime. Eaque nihil dolores repellendus animi repellat est beatae.
    Excepturi placeat alias magni maiores officiis odio esse repellat quaerat quis tempora ea quam vero aspernatur suscipit corporis fuga fugit sequi, autem ullam minima aperiam perspiciatis. Vero numquam eligendi quidem!
    Quia, ut. Ratione, nemo quos reprehenderit aspernatur, fugiat corrupti aliquid blanditiis possimus vero eius error, perferendis consectetur tenetur molestiae quisquam quod libero nihil nulla officia recusandae! Distinctio sapiente necessitatibus similique?
    Similique harum eligendi maxime, vel nulla eos quas rem explicabo id quibusdam voluptatibus corrupti cupiditate beatae saepe perspiciatis placeat reprehenderit omnis porro, dignissimos libero magnam pariatur illo commodi? Sed, modi.
    Ullam, quasi ratione. Vel, voluptate ad. Id molestias delectus dolor aperiam. Quae, laborum vero. Voluptatibus quo amet, aliquam officia maiores nesciunt reprehenderit vel eaque aspernatur accusamus deleniti nobis voluptas in.
    Modi voluptatem minima molestias possimus ex dolorem esse voluptas hic dicta ut quia assumenda itaque magni ipsum magnam a, laborum, ea explicabo. Deleniti, repudiandae. Sequi consequatur dignissimos eos dolorem esse!</p>
</section>

<section>
    <h1 ref={aboutref}>about</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque enim voluptatem, nesciunt incidunt quas harum! Vero fugiat saepe perferendis? Ab dicta numquam possimus tenetur rerum vel illum dignissimos totam?
    Molestias itaque beatae tempora accusantium nisi voluptatem illo pariatur est. Harum consequuntur expedita, ipsam dignissimos excepturi molestiae fuga corporis illo quam recusandae quaerat dolorem cum similique odio eos, nihil deleniti?
    Consequuntur at molestias dicta minus doloremque. Voluptas nam quia velit odio recusandae perferendis. Eveniet impedit laudantium nihil odio hic, eius voluptatum tempora magni, est iusto tempore eum repellat nobis. Excepturi.
    Minus, illo, dicta aliquam magnam mollitia voluptatem sed doloribus perferendis, tempore suscipit architecto tenetur quam itaque fugit inventore rerum voluptas quasi dolor quis debitis tempora dolorem quidem nobis et? Temporibus.
    Ea ut iusto similique, quas voluptatum vel doloremque deserunt dolorem tenetur, incidunt dolore reprehenderit quidem inventore voluptas eius ex culpa laboriosam maxime. Eaque nihil dolores repellendus animi repellat est beatae.
    Excepturi placeat alias magni maiores officiis odio esse repellat quaerat quis tempora ea quam vero aspernatur suscipit corporis fuga fugit sequi, autem ullam minima aperiam perspiciatis. Vero numquam eligendi quidem!
    Quia, ut. Ratione, nemo quos reprehenderit aspernatur, fugiat corrupti aliquid blanditiis possimus vero eius error, perferendis consectetur tenetur molestiae quisquam quod libero nihil nulla officia recusandae! Distinctio sapiente necessitatibus similique?
    Similique harum eligendi maxime, vel nulla eos quas rem explicabo id quibusdam voluptatibus corrupti cupiditate beatae saepe perspiciatis placeat reprehenderit omnis porro, dignissimos libero magnam pariatur illo commodi? Sed, modi.
    Ullam, quasi ratione. Vel, voluptate ad. Id molestias delectus dolor aperiam. Quae, laborum vero. Voluptatibus quo amet, aliquam officia maiores nesciunt reprehenderit vel eaque aspernatur accusamus deleniti nobis voluptas in.
    Modi voluptatem minima molestias possimus ex dolorem esse voluptas hic dicta ut quia assumenda itaque magni ipsum magnam a, laborum, ea explicabo. Deleniti, repudiandae. Sequi consequatur dignissimos eos dolorem esse!</p>
</section>
<section>
    <h1 ref={helpref}>help</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque enim voluptatem, nesciunt incidunt quas harum! Vero fugiat saepe perferendis? Ab dicta numquam possimus tenetur rerum vel illum dignissimos totam?
    Molestias itaque beatae tempora accusantium nisi voluptatem illo pariatur est. Harum consequuntur expedita, ipsam dignissimos excepturi molestiae fuga corporis illo quam recusandae quaerat dolorem cum similique odio eos, nihil deleniti?
    Consequuntur at molestias dicta minus doloremque. Voluptas nam quia velit odio recusandae perferendis. Eveniet impedit laudantium nihil odio hic, eius voluptatum tempora magni, est iusto tempore eum repellat nobis. Excepturi.
    Minus, illo, dicta aliquam magnam mollitia voluptatem sed doloribus perferendis, tempore suscipit architecto tenetur quam itaque fugit inventore rerum voluptas quasi dolor quis debitis tempora dolorem quidem nobis et? Temporibus.
    Ea ut iusto similique, quas voluptatum vel doloremque deserunt dolorem tenetur, incidunt dolore reprehenderit quidem inventore voluptas eius ex culpa laboriosam maxime. Eaque nihil dolores repellendus animi repellat est beatae.
    Excepturi placeat alias magni maiores officiis odio esse repellat quaerat quis tempora ea quam vero aspernatur suscipit corporis fuga fugit sequi, autem ullam minima aperiam perspiciatis. Vero numquam eligendi quidem!
    Quia, ut. Ratione, nemo quos reprehenderit aspernatur, fugiat corrupti aliquid blanditiis possimus vero eius error, perferendis consectetur tenetur molestiae quisquam quod libero nihil nulla officia recusandae! Distinctio sapiente necessitatibus similique?
    Similique harum eligendi maxime, vel nulla eos quas rem explicabo id quibusdam voluptatibus corrupti cupiditate beatae saepe perspiciatis placeat reprehenderit omnis porro, dignissimos libero magnam pariatur illo commodi? Sed, modi.
    Ullam, quasi ratione. Vel, voluptate ad. Id molestias delectus dolor aperiam. Quae, laborum vero. Voluptatibus quo amet, aliquam officia maiores nesciunt reprehenderit vel eaque aspernatur accusamus deleniti nobis voluptas in.
    Modi voluptatem minima molestias possimus ex dolorem esse voluptas hic dicta ut quia assumenda itaque magni ipsum magnam a, laborum, ea explicabo. Deleniti, repudiandae. Sequi consequatur dignissimos eos dolorem esse!</p>
</section>
<section>
    <h1 ref={proectref}>project</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque enim voluptatem, nesciunt incidunt quas harum! Vero fugiat saepe perferendis? Ab dicta numquam possimus tenetur rerum vel illum dignissimos totam?
    Molestias itaque beatae tempora accusantium nisi voluptatem illo pariatur est. Harum consequuntur expedita, ipsam dignissimos excepturi molestiae fuga corporis illo quam recusandae quaerat dolorem cum similique odio eos, nihil deleniti?
    Consequuntur at molestias dicta minus doloremque. Voluptas nam quia velit odio recusandae perferendis. Eveniet impedit laudantium nihil odio hic, eius voluptatum tempora magni, est iusto tempore eum repellat nobis. Excepturi.
    Minus, illo, dicta aliquam magnam mollitia voluptatem sed doloribus perferendis, tempore suscipit architecto tenetur quam itaque fugit inventore rerum voluptas quasi dolor quis debitis tempora dolorem quidem nobis et? Temporibus.
    Ea ut iusto similique, quas voluptatum vel doloremque deserunt dolorem tenetur, incidunt dolore reprehenderit quidem inventore voluptas eius ex culpa laboriosam maxime. Eaque nihil dolores repellendus animi repellat est beatae.
    Excepturi placeat alias magni maiores officiis odio esse repellat quaerat quis tempora ea quam vero aspernatur suscipit corporis fuga fugit sequi, autem ullam minima aperiam perspiciatis. Vero numquam eligendi quidem!
    Quia, ut. Ratione, nemo quos reprehenderit aspernatur, fugiat corrupti aliquid blanditiis possimus vero eius error, perferendis consectetur tenetur molestiae quisquam quod libero nihil nulla officia recusandae! Distinctio sapiente necessitatibus similique?
    Similique harum eligendi maxime, vel nulla eos quas rem explicabo id quibusdam voluptatibus corrupti cupiditate beatae saepe perspiciatis placeat reprehenderit omnis porro, dignissimos libero magnam pariatur illo commodi? Sed, modi.
    Ullam, quasi ratione. Vel, voluptate ad. Id molestias delectus dolor aperiam. Quae, laborum vero. Voluptatibus quo amet, aliquam officia maiores nesciunt reprehenderit vel eaque aspernatur accusamus deleniti nobis voluptas in.
    Modi voluptatem minima molestias possimus ex dolorem esse voluptas hic dicta ut quia assumenda itaque magni ipsum magnam a, laborum, ea explicabo. Deleniti, repudiandae. Sequi consequatur dignissimos eos dolorem esse!</p>
</section>




  </div>
</>  )
}

export default Scrool