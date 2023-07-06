import { useSession, getSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { GetServerSideProps } from "next";
import {
  Card,
  Title,
  Text,
  Grid,
  Flex,
  Metric,
  Icon,
  Button,
} from "@tremor/react";
import Callout from "@/components/Callout";
import {
  BanknotesIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  BeakerIcon,
  AcademicCapIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import GlowingCard from "@/components/GlowingCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main
        className={`bg-slate-100 dark:bg-black ${inter.className} min-h-screen px-2 pt-16 sm:px-10`}
      >
        <Navbar />
        <Flex>
          <div>
            <Title className=' text-gray-900 dark:text-slate-50'>
              My Stats 🚀
            </Title>
            <Text className='dark:text-gray-400'>
              The Combined Data of the last 6 Months
            </Text>
          </div>
          <Link href="/scoreboard">
            <Button
              size='lg'
              variant='light'
              icon={ArrowRightIcon}
              className='pl-4 mt-4 text-blue-400 hover:text-blue-500 dark:text-sky-500 dark:hover:text-sky-400'
              iconPosition='right'
            >
              View Scoreboard
            </Button>
          </Link>
        </Flex>

        <Grid numColsMd={2} numColsLg={3} className='mt-6 gap-6'>
          <GlowingCard
            className='dark:bg-gray-800 dark:ring-0'
            decorationColor='indigo'
            decoration='top'
          >
            <Flex justifyContent='start' className='space-x-4'>
              <Icon
                icon={BeakerIcon}
                variant='light'
                className='dark:bg-gray-900'
                size='xl'
                color='indigo'
              />
              <div className='truncate'>
                <Text className='dark:text-gray-400'>Science</Text>
                <Flex
                  justifyContent='start'
                  alignItems='baseline'
                  className='space-x-3 truncate'
                >
                  <Metric className='truncate dark:text-slate-50'>
                    20.230 EUR
                  </Metric>
                  <Text className='dark:text-gray-400'>from 15.130 EUR</Text>
                </Flex>
              </div>
            </Flex>
            <Callout
              // className='mt-6 dark:bg-teal-200 dark:text-emerald-800'
              // className='mt-6 dark:bg-emerald-900 dark:text-green-200  dark:border-green-500'
              // className='mt-6'
              title={"Performing as usual (+2.3%)"}
              Icon={ArrowRightIcon}
              color='blue'
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </Callout>
            <Button
              size='sm'
              variant='light'
              icon={ArrowRightIcon}
              className='mt-4 text-blue-400 hover:text-blue-500 dark:text-sky-500 dark:hover:text-sky-400'
              iconPosition='right'
            >
              View details
            </Button>
          </GlowingCard>
          <GlowingCard
            className='dark:bg-gray-800 dark:ring-0'
            decorationColor='fuchsia'
            decoration='top'
          >
            <Flex justifyContent='start' className='space-x-4'>
              <Icon
                icon={BanknotesIcon}
                variant='light'
                className='dark:bg-gray-900'
                size='xl'
                color='fuchsia'
              />
              <div className='truncate'>
                <Text className='dark:text-gray-400'>Earnings</Text>
                <Flex
                  justifyContent='start'
                  alignItems='baseline'
                  className='space-x-3 truncate'
                >
                  <Metric className='truncate dark:text-slate-50'>
                    20.230 EUR
                  </Metric>
                  <Text className='dark:text-gray-400'>from 15.130 EUR</Text>
                </Flex>
              </div>
            </Flex>
            <Callout
              title={"Overperforming (+34.3%)"}
              Icon={ArrowTrendingUpIcon}
              color='green'
            >
              <span className="dark:text-green-200">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor.
              </span>
            </Callout>
            <Button
              size='sm'
              variant='light'
              icon={ArrowRightIcon}
              className='mt-4 text-blue-400 hover:text-blue-500 dark:text-sky-500 dark:hover:text-sky-400'
              iconPosition='right'
            >
              View details
            </Button>
          </GlowingCard>
          <GlowingCard
            className='dark:bg-gray-800 dark:ring-0'
            decorationColor='amber'
            decoration='top'
          >
            <Flex justifyContent='start' className='space-x-4'>
              <Icon
                icon={AcademicCapIcon}
                variant='light'
                className='dark:bg-gray-900'
                size='xl'
                color='amber'
              />
              <div className='truncate'>
                <Text className='dark:text-gray-400'>Learning</Text>
                <Flex
                  justifyContent='start'
                  alignItems='baseline'
                  className='space-x-3 truncate'
                >
                  <Metric className='truncate dark:text-slate-50'>
                    15 h
                  </Metric>
                  <Text className='dark:text-gray-400'>from 161 h</Text>
                </Flex>
              </div>
            </Flex>
            <Callout
              // className='mt-6 dark:bg-teal-200 dark:text-emerald-800'
              // className='mt-6 dark:bg-emerald-900 dark:text-green-200  dark:border-green-500'
              title={"Underperforming (-16.3%)"}
              Icon={ArrowTrendingDownIcon}
              color='amber'
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </Callout>
            <Button
              size='sm'
              variant='light'
              icon={ArrowRightIcon}
              className='mt-4 text-blue-400 hover:text-blue-500 dark:text-sky-500 dark:hover:text-sky-400'
              iconPosition='right'
            >
              View details
            </Button>
          </GlowingCard>
          <Card className='dark:bg-gray-800  dark:ring-gray-600'>
            <div className='h-44' />
          </Card>
          <Card className='dark:bg-gray-800  dark:ring-gray-600'>
            <div className='h-44' />
          </Card>
          <Card className='dark:bg-gray-800  dark:ring-gray-600'>
            <div className='h-44' />
          </Card>
        </Grid>
      </main>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/SignIn",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
