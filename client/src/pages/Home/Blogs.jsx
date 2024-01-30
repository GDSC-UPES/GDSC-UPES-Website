import React from 'react'
import Blog from "../../assets/illustrations/home-blog-1.png"
import {Link} from  'react-router-dom';

// import { useQuery } from 'graphql-hooks';

// const PublicationQuery = `
//   query Publication {
//     publication(host: "https://gdscupes.hashnode.dev/") {
//       isTeam
//       title
//       posts(first: 3) {
//         edges {
//           node {
//             title
//             brief
//             url
//           }
//         }
//       }
//     }
//   }
// `;

const Blogs = () => {
  // const { loading, error, data } = useQuery(PublicationQuery);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // const posts = data?.publication?.posts?.edges || [];
  
  return (
    <>
<div className='bg-lineColor border-solid w-full h-[1.5px]'><hr></hr></div>
<div className='flex flex-row'>
        {/* First Row */}
        <div className='flex flex-col w-[50%] max-xs:w-full ml-24 max-xxs:ml-2 max-xs:ml-4 max-md:ml-10 max-lg:ml-12 max-xl:ml-16 py-20 max-xxs:py-0 max-xs:py-2 max-md:py-10 max-lg:py-14 mt-8 max-xxs:mt-2 max-xs:mt-4 max-lg:mt-6'>
          <div className='text-greyText drop-shadow-custom'>
            <div className='flex flex-col max-xs:flex-row font-bold text-6xl max-xxs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl'>
              <div className='flex leading-normal'>
                <p>Blogs from our Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Blog Cards */}
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <div class="h-48 w-full object-cover md:h-full md:w-48">
        <img  src={Blog} alt="" />
      </div>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
<br></br>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <div class="h-48 w-full object-cover md:h-full md:w-48">
        <img  src={Blog} alt="" />
      </div>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
<br></br>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <div class="h-48 w-full object-cover md:h-full md:w-48">
        <img  src={Blog} alt="" />
      </div>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
<br></br>
<br></br>
<div className="flex items-center justify-center">
  <Link to="https://gdscupes.hashnode.dev/">
<button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 mx-auto;">
View All
</button>
</Link>
</div>
<br></br>
{/* <div>
      <h1>{data?.publication?.title}</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post?.node?.title}</h2>
          <p>{post?.node?.brief}</p>
          <a href={post?.node?.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div> */}
            </>
  );
}

export default Blogs;

