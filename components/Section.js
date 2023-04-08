import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Section = () => {
  return (
    <div className="my-5">
      <div>
        <div className="">
          <div className="flex justify-center gap-4 items-center flex-shrink flex-wrap w-full">
            <div className="w-[450px] mx-2">
              <div className=" bg-[#6e8ea6] w-full h-1"></div>
              <div className=" shadow shadow-gray-400 ">
                <div className="py-6 px-5">
                  <h2 className="text-2xl font-semibold">IRD numbers</h2>
                  <p className="pt-2 pb-10">
                    Apply for a new IRD number with Inland Revenue.
                  </p>
                  <div>
                    <div>
                      <div className="flex items-center gap-3 py-1">
                        <FaChevronRight className="text-[14px] text-secondary" />
                        <p className="text-blue-600">
                          IRD numbers for businesses and organisations
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 pt-1">
                          <FaChevronRight className="text-[14px] text-secondary" />
                          <p className="text-blue-600">
                            IRD numbers for individuals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[450px]  mx-2">
              <div className=" bg-[#6e8ea6] w-full h-1"></div>
              <div className=" shadow shadow-gray-400 ">
                <div className="py-6 px-5">
                  <h2 className="text-2xl font-semibold">Calculators</h2>
                  <p className="pt-2 pb-10">
                    Use tax calculators and other tools to help you identify
                    your obligations.
                  </p>
                  <div>
                    <div>
                      <div className="flex items-center gap-3 py-1">
                        <FaChevronRight className="text-[14px] text-secondary" />
                        <p className="text-blue-600">
                          View calculators and tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[450px]  mx-2">
              <div className=" bg-[#6e8ea6] w-full h-1"></div>
              <div className=" shadow shadow-gray-400 ">
                <div className="py-6 px-5">
                  <h2 className="text-2xl font-semibold">
                    Submissions & uploads
                  </h2>
                  <p className="pt-2 pb-10">
                    Search for previous submissions or upload documents.
                  </p>
                  <div>
                    <div>
                      <div className="flex items-center gap-3 py-1">
                        <FaChevronRight className="text-[14px] text-secondary" />
                        <p className="text-blue-600">Find a Submission</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 pt-1">
                          <FaChevronRight className="text-[14px] text-secondary" />
                          <p className="text-blue-600">Upload a document</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
