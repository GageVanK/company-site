import { Center, Image, Space } from "@mantine/core";
import otownlogo from "../assets/otownlogo.jpg";
import FeatureSection from "../components/FeatureSection";
import ContactUsBox from "../components/ContactUsBox";
export default function Home() {
  return (
    <>
      <Center>
        <Image maw={444} mx="auto" radius="md" src={otownlogo} />
      </Center>
      <Center>
        <FeatureSection />
      </Center>

      <Center>
        <ContactUsBox />
      </Center>
    </>
  );
}
