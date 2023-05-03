import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import piccv from "../public/picCV.JPG";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nina Wolfs Prortofolio</title>
        <meta name="description" content="Generated by Nina Wolfs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          {/* Navbar */}
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Developed by NinaW.</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Frontpage */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nina Wolfs
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-end Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              Hi there! <br /> I'm a passionate front-end developer with a keen
              eye for design and a hunger to learn. I have experience building
              responsive and user-friendly websites using HTML, CSS, JavaScript,
              React JS, Tailwind and may more! I'm always looking for new
              challenges to improve my skills. I'm comfortable working with
              modern web development tools such as React, Bootstrap, and Git,
              and I'm always eager to learn more. I believe that great design
              and intuitive user experience are essential components of any
              successful website, and I strive to create websites that are both
              visually appealing and functional. If you're looking for a
              front-end developer who is passionate, driven, and eager to learn,
              I'd love to chat and see how we can work together.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={piccv} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/*Secondpage */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              What I have to offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              As a beginning front-end developer, I offer a range of services to
              help businesses and individuals build and improve their online
              presence. <br />
              These services include:
            </p>

            <div>
              <br />
              <br />
              <ul>
                <li>
                  <span className="text-teal-500">
                    Website design and development
                  </span>
                  : I can help you create a custom website that meets your
                  specific needs, whether you're looking for a simple landing
                  page or a complex web application.
                </li>
                <li>
                  <span className="text-teal-500">Responsive design</span>: I
                  can ensure that your website is optimized for different
                  devices and screen sizes, providing a seamless user experience
                  for your visitors.
                </li>
                <li>
                  <span className="text-teal-500">
                    Website maintenance and updates
                  </span>
                  : I can help you keep your website up to date with the latest
                  content, features, and security patches, ensuring that it
                  remains fast, reliable, and secure.
                </li>
                <li>
                  <span className="text-teal-500">
                    Search engine optimization (SEO)
                  </span>
                  : I can help you improve your website's visibility and ranking
                  in search engine results, making it easier for potential
                  customers to find you online.
                </li>
                <li>
                  <span className="text-teal-500">
                    User experience (UX) design
                  </span>
                  : I can help you create a website that is intuitive and easy
                  to use, ensuring that your visitors have a positive experience
                  and are more likely to engage with your content.
                </li>
                <br />
              </ul>
            </div>
            <p>
              Whether you're a small business looking to establish an online
              presence, a blogger wanting to start a new website, or a larger
              organization looking to improve your existing website, I can help.{" "}
              <br />
              Let's work together to build a website that meets your needs and
              exceeds your expectations.
            </p>
          </div>

          {/*Third part*/}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web- & App creation{" "}
              </h3>
              <p className="py-2">
                Web and app creation are two key components of modern digital
                strategy, and are essential for businesses and organizations
                looking to establish an online presence. With the right
                development tools and techniques, it's possible to create
                high-quality web and mobile applications that engage and delight
                users.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web- & App creation{" "}
              </h3>
              <p className="py-2">
                Web and app creation are two key components of modern digital
                strategy, and are essential for businesses and organizations
                looking to establish an online presence. With the right
                development tools and techniques, it's possible to create
                high-quality web and mobile applications that engage and delight
                users.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web- & App creation{" "}
              </h3>
              <p className="py-2">
                Web and app creation are two key components of modern digital
                strategy, and are essential for businesses and organizations
                looking to establish an online presence. With the right
                development tools and techniques, it's possible to create
                high-quality web and mobile applications that engage and delight
                users.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
            </div>
          </div>
        </section>

        {/*visuals*/}

        <section>
          <div>
            <h3 className="text-3xl py-1">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              As a beginning{" "}
              <span className="text-teal-500">front-end developer</span> , I
              offer a range of services to help businesses and individuals build
              and improve their online presence. <br />
              Let's work <span className="text-teal-500">together</span> to
              build a website that meets your needs and exceeds your
              expectations.
            </p>
          </div>
          <div className="flex flec-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
