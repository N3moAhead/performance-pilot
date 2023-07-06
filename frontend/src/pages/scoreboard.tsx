import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Button,
  Flex,
} from "@tremor/react";
import {
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Avatar from "@/components/Avatar";

interface Row {
  name: string;
  score: number;
  role: string;
}

export default function Scoreboard() {
  const rows: Array<Row> = [
    {
      name: "Lukas Heberling",
      score: 2500,
      role: "Developer",
    },
    {
      name: "Kilian Heberling",
      score: 3100,
      role: "Marketing",
    },
    {
      name: "Justus Heberling",
      score: 4399,
      role: "Creative Director",
    },
    {
      name: "Steven Walsch",
      score: 1200,
      role: "Developer",
    },
    {
      name: "Penelope Manchez",
      score: 950,
      role: "Marketing",
    },
    {
      name: "Pete Fragrenze",
      score: 250,
      role: "Sales",
    },
  ];

  return (
    <main
      className={`bg-slate-100 dark:bg-black ${inter.className} min-h-screen px-2 pt-16 sm:px-10`}
    >
      <Navbar />
      <Flex>
        <Link href='/'>
          <Button
            size='lg'
            variant='light'
            icon={ArrowLeftIcon}
            className='mt-4 pl-4 text-blue-400 hover:text-blue-500 dark:text-sky-500 dark:hover:text-sky-400'
            iconPosition='left'
          >
            View Stats
          </Button>
        </Link>
      </Flex>
      <Card className='mt-6 dark:bg-gray-800 dark:ring-0'>
        {/* <Title>Scoreboard</Title> */}
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell className='dark:text-white'>
                Place
              </TableHeaderCell>
              <TableHeaderCell className='dark:text-white'>
                Person
              </TableHeaderCell>
              <TableHeaderCell className='dark:text-white'>
                Role
              </TableHeaderCell>
              <TableHeaderCell className='dark:text-white'>
                Score
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .sort((a, b) => b.score - a.score)
              .map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell className='flex w-full items-center justify-start dark:text-white'>
                    {`#${index + 1} `}
                    {index % 2 === 0 ? (
                      <ArrowDownIcon className='h-4 w-4  text-red-500 ' />
                    ) : (
                      <ArrowUpIcon className='h-4 w-4   text-emerald-500  ' />
                    )}
                  </TableCell>
                  <TableCell className='dark:text-white'>
                    <Flex justifyContent='start'>
                      <Avatar username={row.name} />
                      <span className='pl-5'>{row.name}</span>
                    </Flex>
                  </TableCell>
                  <TableCell className='dark:text-white'>{row.role}</TableCell>
                  <TableCell className=' font-bold dark:text-white'>
                    {row.score}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}
