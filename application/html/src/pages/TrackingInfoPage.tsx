import { A, useNavigate, useParams } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { Grid } from "../common/layout/grid";
import {createResource, createSignal, onCleanup} from "solid-js";
import { deleteTrackingById, getTrackingById } from "../utils/requests";
import { getURL } from "../utils/util";
import { uriTracking } from "../utils/uri";
import toast from "solid-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../common/components/dialog";
import { Button } from "../common/components/button";
import { Loader } from '@googlemaps/js-api-loader';
export default function TrackingInfoPage() {
  const navigate = useNavigate();
  const params = useParams();

  const trackingId = params.id;

  const [tracking] = createResource(
    () => ({
      id: trackingId
    }),
    getTrackingById
  );
  
  const [mapOptions, setMapOptions] = createSignal({
    center: { lat: -33.860664, lng: 151.208138 },
    zoom: 14
 });

  const apiOptions = {
      apiKey: "AIzaSyBEEK5lI6HKprDMcVwNOBUios-VDLQ3jWI"
  }

  const loader = new Loader(apiOptions);

  loader.load().then(() => {
      console.log('Maps JS API loaded');

      displayMap();
  });

  function displayMap() {
      
      const mapDiv = document.getElementById('map');
      const map = new google.maps.Map(mapDiv, mapOptions);
      return map;
  }

  return (
    <>
      <Grid cols={1} colsMd={2} class="h-full">
        <Flex flexDirection="col" class="p-8 space-y-16">
          <div class="capitalize text-6xl text-center">
            <p>More Info</p>
          </div>
          <Flex justifyContent="center" class="w-full grow border-2 border-black p-8">
            <div class="text-9xl -rotate-45">
                <div id="map"></div>
            </div>
          </Flex>
        </Flex>
        <Flex flexDirection="col" class="p-8 space-y-16">
          <div class="w-full border-2 border-black p-8">
            <div class="space-y-2">
              <Flex class="text-3xl">
                <p><span class="underline">Basic Info:</span> <span class="text-2xl">#{tracking()?.trackingNumber}</span></p>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-red-600"
                  onClick={() => {
                    setDeleting(true);
                  }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </Flex>
              <Grid cols={2} class="text-2xl">
                <div class="space-y-4">
                  <p>Retailer: 
                    <A
                      href={getURL(tracking()?.retailer || "")}
                      target="_blank"
                      class="text-blue-700 underline"
                    >
                      {tracking()?.retailer}
                    </A>
                  </p>
                  <p>Carrier: {tracking()?.carrier}</p>
                  <p>Location: {tracking()?.location}</p>
                </div>
                <div class="space-y-4">
                  <p>ETA: {tracking()?.eta}</p>
                  <p>Status: {tracking()?.status}</p>
                  <p>Address: {tracking()?.address}</p>
                </div>
              </Grid>
            </div>
          </div>
          <div class="w-full grow border-2 border-black p-8">
            <div class="space-y-2">
                <div class="text-3xl">
                  <p>All Updates:</p>
                </div>
                <div class="text-lg">
                  <ul class="list-disc ml-4">
                    <li>Update #1</li>
                    <li>Update #2</li>
                    <li>Update #3</li>
                  </ul>
                </div>
            </div>
          </div>
        </Flex>
      </Grid>
      <Dialog open={deleting()}>
        <DialogContent class="bg-orange-50 border-2 border-black" hideCloseButton>
          <DialogHeader class="space-y-4">
            <DialogTitle>
              Are you sure?
            </DialogTitle>
            <DialogDescription>
              This action is irreversible.
            </DialogDescription>
            <Flex class="gap-x-4">
              <Button
                class="text-white bg-red-600 hover:bg-red-400 grow"
                onClick={() => {
                  setDeleting(false);
                }}
              >
                Cancel
              </Button>
              <Button
                class="text-white bg-black hover:bg-gray-600 grow"
                onClick={() => {
                  deleteTrackingById({ id: trackingId })
                    .then((res) => {
                      toast.success("Successfully deleted tracker!");
                      navigate(uriTracking());
                    })
                    .catch((error) => {
                      toast.error("Something went wrong while trying to process your request.");
                    })
                }}
              >
                Confirm
              </Button>
            </Flex>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}