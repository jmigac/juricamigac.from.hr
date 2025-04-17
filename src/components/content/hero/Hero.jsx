import {getTeaser} from "../../../../lib/api";
import React from "react";
import Image from "next/image";
import {imageQuality} from "../../../../lib/constants";

export default async function Hero() {
    const teaserData = await getTeaser();
    if (teaserData) {
        return (
            <>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 relative bg-white pb-[110px] sm:pt-[120px] md:pt-[120px] dark:bg-dark lg:pt-[150px]">
                    <div className="container">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 lg:w-5/12">
                                <div className="hero-content">
                                    <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                        {teaserData?.title}
                                    </h1>
                                    <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                        Experienced backend software engineer with
                                        extensive expertise in AEM and feature
                                        development, specializing in building efficient,
                                        high-performing applications. Passionate about
                                        designing and implementing scalable backend
                                        architectures, optimizing workflows, and enhancing
                                        user experiences through well-structured and
                                        maintainable code.
                                    </p>
                                    <ul className="flex flex-wrap items-center justify-center">

                                        <li>
                                            <a
                                                href="https://assets.ctfassets.net/x9wbez5bxfw8/2Oj8RI7ZBnhmdbOemRW2sY/6e52acb3da3b616d681f544b432ed97c/CV_Jurica_Miga%C4%8D.pdf"
                                                className="inline-flex items-center justify-center text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                                            >
                                                <span className="mr-2">
                                            <svg
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                                              <rect
                                                  x="7.99893"
                                                  y="14.979"
                                                  width="8.18182"
                                                  height="1.63636"
                                                  fill="white"
                                              />
                                              <rect
                                                  x="11.2717"
                                                  y="7.61523"
                                                  width="1.63636"
                                                  height="4.09091"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                                                  fill="white"
                                              />
                                            </svg>
                                          </span>
                                                Download CV
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden px-4 lg:block lg:w-1/12"></div>
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="lg:ml-auto lg:text-right">
                                    <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                        <Image src={teaserData?.teaser?.url}
                                               alt={teaserData?.teaser?.description}
                                               width={teaserData?.teaser?.width}
                                               height={teaserData?.teaser?.height}
                                               async
                                               priority
                                               quality={imageQuality}
                                        />
                                        <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}