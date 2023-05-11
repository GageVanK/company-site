import {
  Center,
  Image,
  Space,
  Group,
  Paper,
  Divider,
  Badge,
  Tooltip,
  Button,
  SimpleGrid,
  Card,
  Text,
  createStyles
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import otownlogo from "../assets/otownlogo.jpg";
import FeatureSection from "../components/FeatureSection";
import ContactUsBox from "../components/ContactUsBox";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import ap1 from "../assets/ap1.jpg";
import bp1 from "../assets/bp1.jpg";
import ap2 from "../assets/ap2.jpg";
import ap3 from "../assets/ap3.jpg";
import bp2 from "../assets/bp2.jpg";
import bp3 from "../assets/bp3.jpg";
import bp4 from "../assets/bp4.jpg";
import bp5 from "../assets/bp5.jpg";
import bp6 from "../assets/bp6.jpg";
import bp7 from "../assets/bp7.jpg";
import bp8 from "../assets/bp8.jpg";
import bp9 from "../assets/bp9.jpg";
import bp10 from "../assets/bp10.jpg";
import bp11 from "../assets/bp11.jpg";
import bp12 from "../assets/bp12.jpg";
import ap4 from "../assets/ap4.jpg";
import ap5 from "../assets/ap5.jpg";
import ap6 from "../assets/ap6.jpg";
import ap7 from "../assets/ap7.jpg";
import ap8 from "../assets/ap8.jpg";
import ap10 from "../assets/ap10.jpg";
import ap11 from "../assets/ap11.jpg";
import ap12 from "../assets/ap12.jpg";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import r5 from "../assets/r5.jpg";
import r6 from "../assets/r6.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";
import map from "../assets/map.png";
import { HomeCarousel } from "../components/HomeCarousel";
import { IconArrowUp, IconMail, IconPhone } from "@tabler/icons-react";
import Slide from "@stahl.luke/react-reveal/Slide";
import Fade from "@stahl.luke/react-reveal/Fade";
import FAQ from "./FAQ";

const useStyles = createStyles((theme) => ({
  root: {
    margin: "0 auto",
    maxWidth: "1000px"
  },
  root2: {
    margin: "0 auto",
    maxWidth: "500px"
  }
}));

export default function Home() {
  const { classes } = useStyles();

  const {
    scrollIntoView: scrollIntoView1,
    targetRef: targetRef1
  } = useScrollIntoView({
    target: document.querySelector("#section1"),
    offset: 60
  });

  const {
    scrollIntoView: scrollIntoView2,
    targetRef: targetRef2
  } = useScrollIntoView({
    target: document.querySelector("#section2"),
    offset: 60
  });
  const A1 = {
    imageUrl: ap1
  };
  const B1 = {
    imageUrl: bp1
  };
  const A2 = {
    imageUrl: ap2
  };
  const B2 = {
    imageUrl: bp2
  };
  const A3 = {
    imageUrl: ap3
  };
  const B3 = {
    imageUrl: bp3
  };
  const A4 = {
    imageUrl: ap4
  };
  const B4 = {
    imageUrl: bp4
  };
  const A5 = {
    imageUrl: ap5
  };
  const B5 = {
    imageUrl: bp5
  };
  const A6 = {
    imageUrl: ap6
  };
  const B6 = {
    imageUrl: bp6
  };
  const A7 = {
    imageUrl: ap7
  };
  const B7 = {
    imageUrl: bp7
  };
  const A8 = {
    imageUrl: ap8
  };
  const B8 = {
    imageUrl: bp9
  };
  const A9 = {
    imageUrl: ap11
  };
  const B9 = {
    imageUrl: bp10
  };

  const A10 = {
    imageUrl: ap12
  };
  const B10 = {
    imageUrl: bp12
  };
  return (
    <>
      <Center ref={targetRef2}>
        <Image
          maw={444}
          mx="auto"
          radius="md"
          src={otownlogo}
          withPlaceholder
        />
      </Center>

      <Center>
        <Card radius="md" maw={444} shadow={"0"} p="lg">
          <Group position="center">
            <Badge
              variant="gradient"
              gradient={{ from: "lime", to: "green", deg: 105 }}
              size="xl"
              radius="sm"
            >
              Schedule Free Inspection today
            </Badge>
          </Group>

          <Space h="md" />
          <SimpleGrid cols={2}>
            <Button
              target="_blank"
              component="a"
              href="tel:+1 4079424763"
              leftIcon={<IconPhone />}
              variant="light"
              size="md"
              color="lime"
              radius="md"
            >
              Call
            </Button>

            <Button
              leftIcon={<IconMail />}
              onClick={() =>
                scrollIntoView1({
                  alignment: "center"
                })
              }
              variant="light"
              size="md"
              color="lime"
              radius="md"
            >
              Email
            </Button>
          </SimpleGrid>
        </Card>
      </Center>

      <Center>
        <HomeCarousel />
      </Center>

      <Space h={55} />
      <Divider my="sm" />
      <Space h={55} />

      <Group position="center">
        <Badge
          variant="gradient"
          gradient={{ from: "lime", to: "green", deg: 105 }}
          size="xl"
          radius="sm"
        >
          Serving Central Florida
        </Badge>
      </Group>
      <Space h="md" />
      <Center>
        <Fade>
          <Image maw={555} mx="auto" radius="md" src={map} withPlaceholder />
        </Fade>
      </Center>

      <Space h={55} />
      <Divider my="sm" />
      <Space h={55} />

      <Center>
        <FeatureSection />
      </Center>

      <Space h={55} />
      <Divider my="sm" />
      <Space h={55} />

      <Center>
        <FAQ />
      </Center>

      <Space h={55} />
      <Divider my="sm" />
      <Space h={55} />

      <Group position="center">
        <Badge
          variant="gradient"
          gradient={{ from: "lime", to: "green", deg: 105 }}
          size="xl"
          radius="sm"
        >
          before and after
        </Badge>
      </Group>

      <Space h="md" />

      <Group className={classes.root}>
        <Paper shadow="xl" p="lg" withBorder>
          <Center>
            <Badge variant="outline" color="lime" size={222} radius="xs">
              Roofing
            </Badge>
          </Center>
          <Divider my="sm" variant="dotted" />
          <Space h="md" />
          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: "sm", cols: 1 },
              { maxWidth: "md", cols: 2 },
              { maxWidth: "lg", cols: 2 }
            ]}
          >
            <Slide right>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B1}
                    secondImage={A1}
                  />
                </Card.Section>
                <Card.Section inheritPadding mt="sm" pb="md">
                  <SimpleGrid cols={2}>
                    <Image radius="md" src={r1} withPlaceholder />
                    <Image radius="md" src={r2} withPlaceholder />
                  </SimpleGrid>
                </Card.Section>
                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Kissimee, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Wind Damaged Roof</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Here is a 18+ year old roof with multiple wind damaged
                  shingles, verified by the insurance company.
                </Text>

                <Space h="sm" />
                <Text size="xs">
                  Shingle Selection: Certainteed Landmark - Pewter Grey
                </Text>
              </Card>
            </Slide>
            <Slide right>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B2}
                    secondImage={A2}
                  />
                </Card.Section>
                <Card.Section inheritPadding mt="sm" pb="md">
                  <SimpleGrid cols={2}>
                    <Image radius="md" src={r3} withPlaceholder />
                    <Image radius="md" src={r4} withPlaceholder />
                  </SimpleGrid>
                </Card.Section>
                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Winter Haven, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Hurricane Damaged Roof</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  The roof seen here suffered wind damages from hurricane Ian.
                  O-Town Solutions provides estimates and the most thorough,
                  detailed inspections for FREE! With years of experience
                  working with the insurance companies is no challenge to us.
                </Text>

                <Space h="sm" />
                <Text size="xs">
                  Shingle Selection: Certainteed Landmark- Esawn Shake
                </Text>
              </Card>
            </Slide>

            <Slide right>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B9}
                    secondImage={A9}
                  />
                </Card.Section>
                <Card.Section inheritPadding mt="sm" pb="md">
                  <SimpleGrid cols={2}>
                    <Image radius="md" src={ap10} withPlaceholder />
                    <Image radius="md" src={bp11} withPlaceholder />
                  </SimpleGrid>
                </Card.Section>
                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Kissimee, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Energy Efficient Roof</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  If you have no shade around your home sometimes a lighter
                  colored roof can help reduce energy costs and keep the
                  interior cooler because it reflects more sunlight than a
                  darker roof. This means that less heat is absorbed into the
                  building, which reduces the amount of energy required to cool
                  the interior. The shingle seen here is actually Energy Star
                  rated.
                </Text>

                <Space h="sm" />
                <Text size="xs">
                  Shingle Selection: Certain Landmark - Silver Birch (Energy
                  Star)
                </Text>
              </Card>
            </Slide>

            <Slide right>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B3}
                    secondImage={A3}
                  />
                </Card.Section>

                <Card.Section inheritPadding mt="sm" pb="md">
                  <SimpleGrid cols={2}>
                    <Image radius="md" src={r5} withPlaceholder />
                    <Image radius="md" src={r6} withPlaceholder />
                  </SimpleGrid>
                </Card.Section>
                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Winter Haven, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Wind Damaged Roof</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Here we have a 3-tab roof built in 2006 with wind damaged
                  shingles, multiple leaks, and a cracked skylight. We fully
                  restored all damaged wood and upgraded our client to an
                  architectural shingle of their choice.
                </Text>

                <Space h="sm" />
                <Text size="xs">
                  Shingle Selection: Timberline GAF - Charcoal Black
                </Text>
              </Card>
            </Slide>
            <Slide right>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B7}
                    secondImage={A7}
                  />
                </Card.Section>

                <Card.Section inheritPadding mt="sm" pb="md">
                  <Image radius="md" src={bp8} withPlaceholder />
                </Card.Section>
                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Kissimee, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Roof Hail Damage</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Hail can cause serious damage to your roof, leading to leaks
                  and water damage inside your home. Don't wait until it's too
                  late – have your roof inspected after a hailstorm to prevent
                  further issues.
                </Text>

                <Space h="sm" />
                <Text size="xs">Shingle Selection:</Text>
              </Card>
            </Slide>
            <Slide right>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B4}
                    secondImage={A4}
                  />
                </Card.Section>
                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Ocoee, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Damaged Roof</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Did you know insurance companies view a new roof as a sign of
                  a well-maintained home, which is less likely to sustain damage
                  from weather-related events. This is why having a new or
                  recently replaced roof can help lower your homeowners
                  insurance premiums. Get your free inspection today!
                </Text>

                <Space h="sm" />
                <Text size="xs">Shingle Selection: IKO - Oyster Grey</Text>
              </Card>
            </Slide>
          </SimpleGrid>
        </Paper>
        <Space h="md" />

        <Paper shadow="xl" p="lg" withBorder>
          <Center>
            <Badge variant="outline" color="lime" size={222} radius="xs">
              Interior
            </Badge>
          </Center>
          <Divider my="sm" variant="dotted" />
          <Space h="md" />
          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: "sm", cols: 1 },
              { maxWidth: "md", cols: 1 },
              { maxWidth: "lg", cols: 2 }
            ]}
          >
            <Slide left>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B8}
                    secondImage={A8}
                  />
                </Card.Section>

                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Orlando, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Interior Water Damage</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Interior water damage is a serious issue that can lead to mold
                  growth and structural issues if left untreated. Signs include
                  stains, peeling paint, musty odors, and warped material. Have
                  your roof inspected by a O-Town Solutions to fix the issue and
                  prevent further damage.
                </Text>
              </Card>
            </Slide>
            <Slide left>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B6}
                    secondImage={A6}
                  />
                </Card.Section>

                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Orlando, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Interior Water Damage</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Stains on your ceiling are often caused by roof damage, such
                  as leaks or water infiltration. When water seeps into your
                  roof, it can damage the underlying structure and cause water
                  stains and cracks to appear on your ceiling.
                </Text>
              </Card>
            </Slide>
            <Slide left>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B5}
                    secondImage={A5}
                  />
                </Card.Section>

                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Orlando, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Interior Water Damage</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Our in-house crew can help restore your interior replacing any
                  damaged areas of your ceiling and repaint it to match the rest
                  of your home.
                </Text>
              </Card>
            </Slide>
          </SimpleGrid>
        </Paper>

        <Group className={classes.root2}>
          <Paper shadow="xl" p="lg" withBorder>
            <Center>
              <Badge variant="outline" color="lime" size={222} radius="xs">
                Exterior
              </Badge>
            </Center>
            <Divider my="sm" variant="dotted" />
            <Space h="md" />
            <Slide right>
              <Card
                h="100%"
                w="100%"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <ReactBeforeSliderComponent
                    feelsOnlyTheDelimiter="true"
                    firstImage={B10}
                    secondImage={A10}
                  />
                </Card.Section>
                <Card.Section inheritPadding mt="sm" pb="md">
                  <SimpleGrid cols={2}>
                    <Image radius="md" src={e2} withPlaceholder />
                    <Image radius="md" src={e3} withPlaceholder />
                  </SimpleGrid>
                </Card.Section>
                <Space h="sm" />
                <Group position="right">
                  <Badge variant="outline" color="lime" size="sm">
                    Kissimee, FL
                  </Badge>
                </Group>
                <Divider my="sm" />

                <Group position="center" mt="md" mb="xs">
                  <Text weight={500}>Exterior Detailing</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  At O-Town Solutions we offer more than just roofing and we
                  believe quality is key in all the services we provide from
                  materials to workmanship.
                </Text>
              </Card>
            </Slide>
          </Paper>
        </Group>
      </Group>

      <Space h={55} />
      <Divider my="sm" />
      <Space h={55} />

      <Center ref={targetRef1}>
        <Slide bottom>
          <ContactUsBox />
        </Slide>
      </Center>

      <Space h={55} />

      <Center>
        <Tooltip
          label="Scroll to the top"
          position="bottom"
          arrowPosition="center"
          radius="md"
        >
          <Button
            onClick={() =>
              scrollIntoView2({
                alignment: "center"
              })
            }
            variant="light"
            color="lime"
            radius="xl"
            size="md"
          >
            <IconArrowUp />
          </Button>
        </Tooltip>
      </Center>
    </>
  );
}
