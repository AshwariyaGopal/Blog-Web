// import { urlFor } from '../../../sanity/lib/image'; // Import the urlFor function
// import { client } from '../../../sanity/lib/client'; 
// import { PortableText } from "@portabletext/react";

// type Author = {
//   bio: string;
//   image: { asset: { _ref: string } };
//   name: string;
// };

// type BlogPost = {
//   title: string;
//   summary: string;
//   image: { asset: { _ref: string } };
//   content: string;
//   slug: string;
//   author: Author;
// };

// type Props = {
//   params: { slug: string }; // Expecting slug as part of params
// };

// const BlogPostPage = async ({ params }: Props) => {
//   // Ensure params.slug is defined
//   if (!params?.slug) {
//     return <div>Invalid slug!</div>;
//   }

//   // Fetch the blog post based on the slug from params
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     summary,
//     image,
//     content,
//     "slug": slug.current,
//     author->{name, image, bio}
//   }`;

//   // Fetch the post data
//   const post = await client.fetch(query, { slug: params.slug });

//   if (!post) {
//     return <div>Post not found!</div>; // Handle case where no post is found
//   }

//   const imageUrl = post.image ? urlFor(post.image.asset._ref) : null;

//   return (
//     <div>
//       <article className="mt-24 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         {/* Blog Title */}
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         {/* Featured Image */}
//         {imageUrl && (
//           <img src={imageUrl} alt={post.title} width={1000} height={300} />
//         )}

//         {/* Blog Summary Section */}
//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         {/* Author Section (Image & Bio) */}
//         <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//           {post.author?.image?.asset._ref && (
//             <img
//               src={urlFor(post.author.image.asset._ref)}
//               alt={post.author.name}
//               width={100}
//               height={100}
//             />
//           )}
//           <div className="flex flex-col gap-1">
//             {post.author?.name ? (
//               <h3 className="text-xl font-bold text-dark dark:text-light">
//                 {post.author.name}
//               </h3>
//             ) : (
//               <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//                 {post.author?.bio || 'Bio not available'}
//               </p>
//             )}
//           </div>
//         </section>

//         {/* Main Body of Blog */}
//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     </div>
//   );
// };

// export default BlogPostPage;
//just now
// import { urlFor } from '../../../sanity/lib/image'; // Import the urlFor function
// import { client } from '../../../sanity/lib/client'; 
// import { PortableText } from "@portabletext/react";
// import { NextPage } from 'next'; // Import NextPage
// import { GetServerSideProps } from 'next'; // Import GetServerSideProps

// // Define the types for Author and BlogPost
// type Author = {
//   bio: string;
//   image: { asset: { _ref: string } };
//   name: string;
// };

// type BlogPost = {
//   title: string;
//   summary: string;
//   image: { asset: { _ref: string } };
//   content: string;
//   slug: string;
//   author: Author;
// };

// // Define the Props type for the component, expecting a `slug` in params
// type Props = {
//   post: BlogPost | null;
// };

// const BlogPostPage: NextPage<Props> = ({ post }) => {
//   if (!post) {
//     return <div>Post not found!</div>; // Handle case where no post is found
//   }

//   const imageUrl = post.image ? urlFor(post.image.asset._ref) : null;

//   return (
//     <div>
//       <article className="mt-24 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         {/* Blog Title */}
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         {/* Featured Image */}
//         {imageUrl && (
//           <img src={imageUrl} alt={post.title} width={1000} height={300} />
//         )}

//         {/* Blog Summary Section */}
//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         {/* Author Section (Image & Bio) */}
//         <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//           {post.author?.image?.asset._ref && (
//             <img
//               src={urlFor(post.author.image.asset._ref)}
//               alt={post.author.name}
//               width={100}
//               height={100}
//             />
//           )}
//           <div className="flex flex-col gap-1">
//             {post.author?.name ? (
//               <h3 className="text-xl font-bold text-dark dark:text-light">
//                 {post.author.name}
//               </h3>
//             ) : (
//               <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//                 {post.author?.bio || 'Bio not available'}
//               </p>
//             )}
//           </div>
//         </section>

//         {/* Main Body of Blog */}
//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     </div>
//   );
// };

// // Fetch data before rendering (SSR)
// export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
//   const slug = params?.slug as string; // Explicitly cast slug as string

//   // Fetch the blog post based on the slug from params
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     summary,
//     image,
//     content,
//     "slug": slug.current,
//     author->{name, image, bio}
//   }`;

//   const post = await client.fetch(query, { slug });

//   return {
//     props: {
//       post: post || null, // Pass post data or null if not found
//     },
//   };
// };
//just abhu aui

// import { urlFor } from '../../../sanity/lib/image'; // Import the urlFor function
// import { client } from '../../../sanity/lib/client'; 
// import { PortableText } from "@portabletext/react";

// type Author = {
//   bio: string;
//   image: { asset: { _ref: string } };
//   name: string;
// };

// type BlogPost = {
//   title: string;
//   summary: string;
//   image: { asset: { _ref: string } };
//   content: string;
//   slug: string;
//   author: Author;
// };

// // ✅ Fetch data inside the component (Server Component)
// const fetchPost = async (slug: string) => {
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     summary,
//     image,
//     content,
//     "slug": slug.current,
//     author->{name, image, bio}
//   }`;

//   return client.fetch(query, { slug });
// };

// // ✅ Accept `params` as a prop (App Router feature)
// const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
//   const post = await fetchPost(params.slug);

//   if (!post) {
//     return <div>Post not found!</div>;
//   }

//   const imageUrl = post.image ? urlFor(post.image.asset._ref) : null;

//   return (
//     <div>
//       <article className="mt-24 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         {imageUrl && (
//           <img src={imageUrl} alt={post.title} width={1000} height={300} />
//         )}

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//           {post.author?.image?.asset._ref && (
//             <img
//               src={urlFor(post.author.image.asset._ref)}
//               alt={post.author.name}
//               width={100}
//               height={100}
//             />
//           )}
//           <div className="flex flex-col gap-1">
//             {post.author?.name ? (
//               <h3 className="text-xl font-bold text-dark dark:text-light">
//                 {post.author.name}
//               </h3>
//             ) : (
//               <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//                 {post.author?.bio || 'Bio not available'}
//               </p>
//             )}
//           </div>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     </div>
//   );
// };

// export default BlogPostPage;

//by me
// import { urlFor } from "../../../sanity/lib/image"; // Import the urlFor function
// import { client } from "../../../sanity/lib/client";
// import { PortableText } from "@portabletext/react";
// import { Metadata } from "next";
// import { promises } from "dns";

// type Author = {
//   bio?: string;
//   image?: { asset?: { _ref?: string } };
//   name?: string;
// };

// type BlogPost = {
//   title: string;
//   summary: string;
//   image?: { asset?: { _ref?: string } };
//   content: any; // PortableText content can be an array
//   slug: string;
//   author?: Author;
// };

// // ✅ Fetch data inside the component (Server Component)
// const fetchPost = async (slug: string): Promise<BlogPost | null> => {
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     summary,
//     image,
//     content,
//     "slug": slug.current,
//     author->{name, image, bio}
//   }`;

//   return client.fetch(query, { slug });
// };

// // ✅ Accept `params` as a prop (App Router feature)
// interface PageProps {
//   params: Promise<{ slug: string }>;
//   searchParams: { [key: string]: string | string[] | undefined};
// }

// // ✅ Ensure `params` is destructured correctly
// export async function generateMetadata(props :PageProps): Promise<Metadata> {
//   const params = await props.params;
//   const { slug } = params; // Ensure params is properly destructured
//   const post = await fetchPost(slug);
//   if (!post) return { title: "Post Not Found" };
//   return { title: post.title };
// }

// // ✅ Ensure correct async function signature
// const BlogPostPage = async ({params}:PageProps) => {
//   const { slug } = await params; // Ensure params is properly destructured
//   const post = await fetchPost(slug);

//   if (!post) {
//     return <div className="text-center text-xl mt-10">Post not found!</div>;
//   }

//   // ✅ Ensure image reference exists before passing to urlFor
//   const imageUrl = post.image?.asset?._ref ? urlFor(post.image.asset._ref) : null;

//   return (
//     <div>
//       <article className="mt-24 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         {/* ✅ Ensure imageUrl exists before rendering */}
//         {imageUrl && (
//           <img src={imageUrl} alt={post.title} width={1000} height={300} />
//         )}

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//           {/* ✅ Ensure author image reference exists before calling urlFor */}
//           {post.author?.image?.asset?._ref && (
//             <img
//               src={urlFor(post.author.image.asset._ref)}
//               alt={post.author.name || "Author"}
//               width={100}
//               height={100}
//             />
//           )}
//           <div className="flex flex-col gap-1">
//             {post.author?.name ? (
//               <h3 className="text-xl font-bold text-dark dark:text-light">
//                 {post.author.name}
//               </h3>
//             ) : (
//               <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//                 {post.author?.bio || "Bio not available"}
//               </p>
//             )}
//           </div>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     </div>
//   );
// };

// export default BlogPostPage;

// import { urlFor } from "../../../sanity/lib/image";
// import { client } from "../../../sanity/lib/client";
// import { PortableText } from "@portabletext/react";
// import { Metadata } from "next"; // Correct import for Server Component

// type Author = {
//   bio?: string;
//   image?: { asset?: { _ref?: string } };
//   name?: string;
// };

// type BlogPost = {
//   title: string;
//   summary: string;
//   image?: { asset?: { _ref?: string } };
//   content: any;
//   slug: string;
//   author?: Author;
// };

// async function fetchPost(slug: string): Promise<BlogPost | null> {
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     summary,
//     image,
//     content,
//     "slug": slug.current,
//     author->{name, image, bio}
//   }`;
//   return client.fetch(query, { slug });
// }

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const post = await fetchPost(params.slug);
//   return {
//     title: post?.title || "Post Not Found",
//     // ... other metadata if needed
//   };
// }

// export default async function BlogPostPage({ params, searchParams }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
//   const post = await fetchPost(params.slug);

//   if (!post) {
//     return <div className="text-center text-xl mt-10">Post not found!</div>;
//   }

//   const imageUrl = post?.image?.asset?._ref ? urlFor(post.image.asset._ref) : null;

//   // Example of using searchParams:
//   const searchQuery = searchParams?.q;
//   console.log("Search Query:", searchQuery);
//   console.log("Post Data:", post); // Keep this for debugging!

//   return (
//     <div>
//       <article className="mt-24 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post?.title}
//         </h1>

//         {imageUrl && (
//           <img src={imageUrl} alt={post?.title} width={1000} height={300} />
//         )}

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post?.summary}
//           </p>
//         </section>

//         <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//           {post?.author?.image?.asset?._ref && (
//             <img
//               src={urlFor(post.author.image.asset._ref)}
//               alt={post?.author?.name || "Author"}
//               width={100}
//               height={100}
//             />
//           )}
//           <div className="flex flex-col gap-1">
//             {post?.author?.name ? (
//               <h3 className="text-xl font-bold text-dark dark:text-light">
//                 {post.author.name}
//               </h3>
//             ) : (
//               <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//                 {post?.author?.bio || "Bio not available"}
//               </p>
//             )}
//           </div>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post?.content} />
//         </section>
//       </article>
//     </div>
//   );
// }


//now
// import { urlFor } from "../../../sanity/lib/image";
// import { client } from "../../../sanity/lib/client";
// import { urlFor } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// import { Metadata } from "next"; // Correct import for Server Component

// type Author = {
//   bio?: string;
//   image?: { asset?: { _ref?: string } };
//   name?: string;
// };

// type BlogPost = {
//   title: string;
//   summary: string;
//   image?: { asset?: { _ref?: string } };
//   content: any;
//   slug: string;
//   author?: Author;
// };

// // Fetching the post
// async function fetchPost(slug: string): Promise<BlogPost | null> {
//   const query = `*[_type == "post" && slug.current == $slug][0]{
//     title,
//     summary,
//     image,
//     content,
//     "slug": slug.current,
//     author->{name, image, bio}
//   }`;
//   return client.fetch(query, { slug });
// }

// // Correct type for params (no Promise)
// interface PageProps {
//   params: { slug: string }; // Ensure this is a simple object
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const post = await fetchPost(params.slug);
//   return {
//     title: post?.title || "Post Not Found",
//     // ... other metadata if needed
//   };
// }

// export default async function BlogPostPage({ params }: PageProps) {
//   const post = await fetchPost(params.slug);

//   if (!post) {
//     return <div className="text-center text-xl mt-10">Post not found!</div>;
//   }

//   const imageUrl = post?.image?.asset?._ref ? urlFor(post.image.asset._ref) : null;

//   return (
//     <div>
//       <article className="mt-24 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post?.title}
//         </h1>

//         {imageUrl && (
//           <img src={imageUrl} alt={post?.title} width={1000} height={300} />
//         )}

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post?.summary}
//           </p>
//         </section>

//         <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//           {post?.author?.image?.asset?._ref && (
//             <img
//               src={urlFor(post.author.image.asset._ref)}
//               alt={post?.author?.name || "Author"}
//               width={100}
//               height={100}
//             />
//           )}
//           <div className="flex flex-col gap-1">
//             {post?.author?.name ? (
//               <h3 className="text-xl font-bold text-dark dark:text-light">
//                 {post.author.name}
//               </h3>
//             ) : (
//               <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//                 {post?.author?.bio || "Bio not available"}
//               </p>
//             )}
//           </div>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post?.content} />
//         </section>
//       </article>
//     </div>
//   );
// }

import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next"; // Correct import for Server Component

type Author = {
  bio?: string;
  image?: { asset?: { _ref?: string } };
  name?: string;
};

type BlogPost = {
  title: string;
  summary: string;
  image?: { asset?: { _ref?: string } };
  content: any;
  slug: string;
  author?: Author;
};

// Fetching the post
async function fetchPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    summary,
    image,
    content,
    "slug": slug.current,
    author->{name, image, bio}
  }`;
  return client.fetch(query, { slug });
}

// Correct type for params (no Promise)
interface PageProps {
  params: { slug: string }; // Ensure this is a simple object
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  return {
    title: post?.title || "Post Not Found",
    // ... other metadata if needed
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await fetchPost(params.slug);

  if (!post) {
    return <div className="text-center text-xl mt-10">Post not found!</div>;
  }

  const imageUrl = post?.image?.asset?._ref ? urlFor(post.image.asset._ref) : null;

  return (
    <div>
      <article className="mt-24 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post?.title}
        </h1>

        {imageUrl && (
          <img src={imageUrl} alt={post?.title} width={1000} height={300} />
        )}

        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post?.summary}
          </p>
        </section>

        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          {post?.author?.image?.asset?._ref && (
            <img
              src={urlFor(post.author.image.asset._ref)}
              alt={post?.author?.name || "Author"}
              width={100}
              height={100}
            />
          )}
          <div className="flex flex-col gap-1">
            {post?.author?.name ? (
              <h3 className="text-xl font-bold text-dark dark:text-light">
                {post.author.name}
              </h3>
            ) : (
              <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
                {post?.author?.bio || "Bio not available"}
              </p>
            )}
          </div>
        </section>

        <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
          <PortableText value={post?.content} />
        </section>
      </article>
    </div>
  );
}
