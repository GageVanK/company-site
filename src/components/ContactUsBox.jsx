import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  Space,
  Notification,
  Center
} from "@mantine/core";
import {
  IconPhone,
  IconBrandInstagram,
  IconBrandFacebook,
  IconX,
  IconCheck
} from "@tabler/icons-react";
import { ContactIconsList } from "../components/ContactIconsList";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, 
      rgb(169, 227, 75)
     0%, rgb(1, 50, 32) 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%"
    }
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1]
    }
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5]
    }
  },

  inputLabel: {
    color: theme.black
  },

  control: {
    backgroundColor: "dark"
  }
}));

export default function ContactUsBox() {
  const { classes } = useStyles();
  const [sendStatus, setSendStatus] = useState(null);

  const form = useForm({
    initialValues: {
      from_name: "",
      from_email: "",
      message: ""
    },
    validate: {
      from_name: (value) => value.trim().length < 2,
      from_email: (value) => !/^\S+@\S+$/.test(value),
      message: (value) => value.trim().length === 0
    }
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9bseth4",
        "template_1duyfkj",
        e.target,
        "pJfm_9fPpzZ0XCVOo"
      )
      .then(
        (result) => {
          setSendStatus("success");
          console.log("message sent");

          setTimeout(() => {
            setSendStatus(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setSendStatus("error");

          setTimeout(() => {
            setSendStatus(null);
          }, 5000);
        }
      );
  };

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your message and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />
          <Space h="md" />
          <Group spacing={1} position="left" noWrap>
            <ActionIcon
              variant="transparent"
              target="_blank"
              component="a"
              href="https://www.facebook.com/profile.php?id=100090060669297"
              size="lg"
            >
              <IconBrandFacebook size={33} stroke-width={1.5} color="white" />
            </ActionIcon>

            <ActionIcon
              variant="transparent"
              target="_blank"
              component="a"
              href="https://www.instagram.com/otownsolutions/"
              size="lg"
            >
              <IconBrandInstagram size={33} stroke-width={1.5} color="white" />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              target="_blank"
              component="a"
              href="tel:+1 4079424763"
              size="lg"
            >
              <IconPhone size={33} stroke-width={1.5} color="white" />
            </ActionIcon>
          </Group>
        </div>
        <form ref={form.setRef} onSubmit={sendEmail}>
          <div className={classes.form}>
            <TextInput
              name="from_email"
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              name="from_name"
              label="Name"
              placeholder="Your Name"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              name="message"
              required
              label="Your message"
              placeholder="Please leave us a message or call us for a free estimate"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button color="lime" type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>

            <Space h="sm" />
            <Center>
              {sendStatus === "success" && (
                <Notification
                  icon={<IconCheck size="1.2rem" />}
                  color="lime"
                  radius="xl"
                  title="Success"
                  withCloseButton={false}
                >
                  Message sent successfully.
                </Notification>
              )}

              {sendStatus === "error" && (
                <Notification
                  title="Error"
                  withCloseButton={false}
                  icon={<IconX size="1.1rem" />}
                  color="red"
                >
                  Message was not able to send, try again.
                </Notification>
              )}
            </Center>
          </div>
        </form>
      </SimpleGrid>
    </div>
  );
}
