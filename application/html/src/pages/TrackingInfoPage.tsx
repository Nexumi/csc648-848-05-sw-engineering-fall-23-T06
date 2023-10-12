import { useParams } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { Grid } from "../common/layout/grid";
import { createResource } from "solid-js";
import { getTrackingById } from "../utils/requests";

export default function TrackingInfoPage() {
  const params = useParams();
  
  const trackingId = params.id;

  const [tracking] = createResource(
    () => ({
      id: trackingId
    }),
    getTrackingById
  );

  return (
    <>
      <Grid cols={1} colsMd={2} class="h-full">
        <Flex flexDirection="col" class="p-8 space-y-16">
          <div class="capitalize text-6xl text-center">
            <p>More Info</p>
          </div>
          <Flex justifyContent="center" class="w-full grow border-2 border-black p-8">
            <div class="text-9xl -rotate-45">
              <p>MAP</p>
            </div>
          </Flex>
        </Flex>
        <Flex flexDirection="col" class="p-8 space-y-16">
          <div class="w-full border-2 border-black p-8">
            <div class="space-y-2">
              <div class="underline text-3xl">
                <p>Basic Info:</p>
              </div>
              <Grid cols={2} class="text-2xl">
                <div class="space-y-4">
                  <p>Retailer: {tracking()?.retailer}</p>
                  <p>Carrier: {tracking()?.carrier}</p>
                </div>
                <div class="space-y-4">
                  <p>ETA: {tracking()?.eta}</p>
                  <p>Status: {tracking()?.status}</p>
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
    </>
  );
}