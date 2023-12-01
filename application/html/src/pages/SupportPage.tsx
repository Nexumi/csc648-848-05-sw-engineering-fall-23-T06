import { Flex } from "../common/layout/flex";

export default function SupportPage() {
  return (
    <div class="container mx-auto h-screen">
      <Flex justifyContent="start" alignItems="start" class="h-full flex-col p-4">
        <h1 class="text-6xl font-bold mb-4">Help and Support</h1>
        <p class="text-lg mb-8">
          Need assistance? You're in the right place! Check out our Q&A or contact our team for help.
        </p>

        <section class="mb-8">
          <h2 class="text-4xl font-semibold mb-4">Questions & Answers</h2>
          <div class="space-y-4">
            <div>
              <p class="font-bold">Q: Does we have a limit of the amount of order you can track?</p>
              <p>A: No, you can tarck as many order as you want.</p>
            </div>
            <div>
              <p class="font-bold">Q: How do I upload my order?</p>
              <p>A: You can upload your order by clicking on the "Upload" tab and enter the tracking number. Once you enter, our system will report the retailer and carrier then you could submit and check for more Information.</p>
            </div>
            <div>
              <p class="font-bold">Q: How do I track my order?</p>
              <p>A: You can track your order by clicking on the "Tracking" tab and entering your tracking number or you can enter website where your orders is from.</p>
            </div>
            <div>
              <p class="font-bold">Q: What is different between Guest and Register?</p>
              <p>A: The difference between Guest and Register is Registered accounts are given higher priority when dealing with users issues.</p>
            </div>

          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-4xl font-semibold mb-4">Contact Information</h2>
          <p>Email: orderowl@jpkit.us</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 123 OrderOwl St., Team 6 City, Zip Code 12345</p>
        </section>
      </Flex>
    </div>
  );
}





