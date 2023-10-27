import Logo from "../Logo";
import FooterOptions from "./FooterOptions";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-customFooter border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved&reg;.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <FooterOptions optionName="Features" link={"/features"} />
                </li>
                <li className="mb-4">
                  <FooterOptions optionName="Pricing" link={"/pricing"} />
                </li>
                <li className="mb-4">
                  <FooterOptions
                    optionName="Affiliate Program"
                    link={"/affiliate"}
                  />
                </li>
                <li>
                  <FooterOptions optionName="Press Kit" link={"/press"} />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <FooterOptions optionName="Account" link={"/account"} />
                </li>
                <li className="mb-4">
                  <FooterOptions optionName="Help" link={"/help"} />
                </li>
                <li className="mb-4">
                  <FooterOptions optionName="Contact Us" link={"/contact"} />
                </li>
                <li>
                  <FooterOptions
                    optionName="Customer Support"
                    link={"/support"}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <FooterOptions
                    optionName="Terms &amp; Conditions"
                    link={"/tnc"}
                  />
                </li>
                <li className="mb-4">
                  <FooterOptions
                    optionName="Privacy Policy"
                    link={"/privacy"}
                  />
                </li>
                <li>
                  <FooterOptions optionName="Licensing" link={"/licensing"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
