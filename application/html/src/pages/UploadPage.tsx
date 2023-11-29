import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import SearchIcon from "../assets/logos/SearchIcon.png";
import { createForm } from "@felte/solid";
import { postTracking } from "../utils/requests";
import toast from "solid-toast";
import { uriTracking } from "../utils/uri";

export default function UploadPage() {

  const navigate = useNavigate();

  const { form, data, setData, reset } = createForm({
    onSubmit(values) {
      const params = {
        trackingNumber: values.trackingNumber,
        orderTitle: values.orderTitle,
      }

      postTracking(params)
        .then((res) => {
          toast.success("Successfully processed your request!");
          reset();
          setData("retailer", res.data?.retailer);
          setData("carrier", res.data?.carrier);
          setData("id", res.data?.id);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong while trying to process your request.");
        })
    }
  });

  return (
    <>
      <form use:form class="h-full">
        <Flex flexDirection="col" class="h-full">
          <div class="text-center text-6xl mb-8">
            <p>Upload</p>
          </div>
          <Flex justifyContent="center" alignItems="end" class="gap-x-16">
            <div>
              <p class="text-xl mr-2">Tracking Number:</p>
              <input
                name="trackingNumber"
                class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
                type="text"
                />
            </div> 
            <div class="mr-12">
              <p class="text-xl mr-2">Order Title:</p>
              <input
                name="orderTitle"
                class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
                type="text"
                />
            </div>
          </Flex>
          <Flex flexDirection="col" justifyContent="center" class="grow">
            <Flex justifyContent="center" alignItems="end" class="gap-x-16">
              <div>
                <header>
                  <Flex justifyContent="end" class="gap-x-2">
                  <label for="carriers" class="text-xl mr-2" >Choose a carrier:</label>
                  <select name="carriers" id="carriers">
                    <option value="select">Select</option>
                    <optgroup label="United States">
                        <option value="DHL Express and DHL eCommerce">DHL Express and DHL eCommerce</option>
                        <option value="FedEx and FedEx Ground Economy">FedEx and FedEx Ground Economy</option>
                        <option value="UPS and UPS Mail Innovations">UPS and UPS Mail Innovations</option>
                        <option value="APC Postal">APC Postal</option>
                        <option value="AxleHire">AxleHire</option>
                        <option value="Airterra ">Airterra </option>
                        <option value="Better Trucks">Better Trucks</option>
                        <option value="Swyft">Swyft</option>
                        <option value="Maergo">Maergo</option>
                        <option value="LaserShip">LaserShip</option>
                        <option value="OnTrac">OnTrac</option>
                        <option value="ePost Global">ePost Global</option>
                    </optgroup>
                    <optgroup label="Australia">
                        <option value="Australia Post">Australia Post</option>
                        <option value="Sendle">Sendle</option>
                        <option value="CouriersPlease">CouriersPlease</option>
                    </optgroup>
                    <optgroup label="Canada">
                        <option value="Canada Post">Canada Post</option>
                        <option value="UPS">UPS</option>
                        <option value="Purolator">Purolator</option>
                        <option value="DHL Express">DHL Express</option>
                        <option value="FedEx">FedEx</option>
                    </optgroup>
                    <optgroup label="France">
                        <option value="Chronopost">Chronopost</option>
                        <option value="Collissimo">Collissimo</option>
                    </optgroup>
                    <optgroup label="United Kingdom">
                        <option value="Evri">Evri</option>
                        <option value="DPD UK">DPD UK</option>
                        <option value="Royal Mail">Royal Mail</option>
                    </optgroup>
                    <optgroup label="Germany">
                        <option value="Deutsche Post">Deutsche Post</option>
                        <option value="DHL DE">DHL DE</option>
                        <option value="DPD DE">DPD DE</option>
                    </optgroup>
                    <optgroup label="Italy">
                        <option value="Post Italiane">Post Italiane</option>
                    </optgroup>
                    <optgroup label="Spain">
                        <option value="Correos">Correos</option>
                    </optgroup>
                  </select>
                  </Flex>
                </header>
              </div>
              <button type="submit" class="ml-2 px-2 py-2 focus:outline-none rounded-full border-2 border-black">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
              </button>

            </Flex>
          </Flex>
          <Flex class="grow">
          </Flex>
        </Flex>
      </form>
      {/* <Flex flexDirection="col" alignItems="center" class="h-full w-full">
        <div class="capitalize text-6xl text-center mb-1">
        <p>New Tracking Info</p>
        </div>
        
        <Flex justifyContent="center" class="w-full mb-1">
        <Button class="text-white bg-black hover:bg-gray-600">
        Upload
        </Button>
        </Flex>
        
        <hr class="border-black border-t-4 w-full mb-2" />

        <Flex justifyContent="center" class="w-full mb-0.5">
          <form use:form class="w-3/4 flex space-x-0.5">
            <div class="flex-grow">
              <span class="text-xl mr-0.5">Tracking #:</span>
              <input name="firstTrackingNumber" class="w-full px-3 py-1 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text"/>
            </div>
            <button type="submit" class="ml-0.5 focus:outline-none">
              <img src={SearchIcon} alt="Search" class="w-5 h-5" />
            </button>
          </form>
        </Flex>

        <Flex justifyContent="center" class="w-full mt-0.5">
          <form use:form class="w-3/4 flex space-x-0.5">
            <div class="w-1/4">
              <span class="text-xl mr-0.5">Carrier Info:</span>
              <input name="carrierInfo" class="w-full px-3 py-1 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text"/>
            </div>
            <div class="flex-grow">
              <span class="text-xl mr-0.5">Tracking #:</span>
              <input name="secondTrackingNumber" class="w-full px-3 py-1 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text"/>
            </div>
            <button type="submit" class="ml-0.5 focus:outline-none">
              <img src={SearchIcon} alt="Search" class="w-5 h-5" />
            </button>
          </form>
        </Flex>
      </Flex> */}
    </>
  );
}