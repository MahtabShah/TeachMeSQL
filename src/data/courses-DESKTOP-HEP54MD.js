const sec1chapter2 = {
  id: "sql-sec1-chapter-2",
  title: "Conditions Basics",
  order: 1,

  contents: [
    {
      id: "i-b-1",
      sub_blocks: [
        {
          id: "ic-content-1",
          type: "text",
          data: {
            text: `Sometimes we would like to fetch records that meet a certain condition. For example`,
          },
        },

        {
          id: "isbc-1",
          type: "list",
          data: {
            lists: [
              `fetch all of the records that have the family name "Socky"`,
              `fetch all of the records that the amount is bigger than 50`,
              `fetch all of the records with the country "INDIA"`,
            ],
          },
        },
      ],
    },

    {
      id: "abc-x-q",
      sub_blocks: [
        {
          id: "asb-ss",
          type: "text",
          data: {
            text: `To add conditions we can use the WHERE keyword
            For example here is a employee table:`,
          },
        },

        {
          id: "isb-2",
          type: "table",
          data: {
            column: ["name", "age", "exp_years", "gender"],
            rows: [
              ["Ghully", 29, 1.5, "Female"],
              ["Bostal", 32, 2, "Male"],
              ["Pille", 29, 5, "Female"],
            ],
          },
        },
      ],
    },

    {
      id: "i-qb-2",
      sub_blocks: [
        {
          id: "isb-2",
          type: "text",
          data: {
            text: `To fetch all the records that have more than 2 years of experiance, we will use WHERE keyword`,
          },
        },

        {
          id: "isb-5",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name, age, exp_years
FROM table_name
WHERE exp_years > 2`,
          },
        },

        {
          id: "isb-2",
          type: "text",
          data: {
            text: `The result will be `,
          },
        },

        {
          id: "isb-2",
          type: "table",
          data: {
            column: ["name", "age", "exp_years"],
            rows: [["Pille", 29, 5]],
          },
        },

        {
          id: "isb-2",
          type: "text",
          data: {
            text: `To fetch all the employees that thier age is 29`,
          },
        },

        {
          id: "isb-5",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name, age, exp_years
FROM table_name
WHERE age = 29`,
          },
        },
      ],
    },

    {
      id: "i-b-3",
      sub_blocks: [
        {
          id: "i1sb-2",
          type: "heading",
          data: {
            text: `The AND keyword`,
          },
        },

        {
          id: "i2sb-3",
          type: "text",
          data: {
            text: `The AND keyword means that both conditions must be true; if either one of them is not, then the condition will not be met.

For example here is a people table:`,
          },
        },

        {
          id: "isb-2",
          type: "table",
          data: {
            column: ["name", "age", "exp_years", "gender"],
            rows: [
              ["Ghully", 29, 1.5, "Female"],
              ["Bostal", 32, 2, "Male"],
              ["Pille", 29, 5, "Female"],
            ],
          },
        },

        {
          id: "i2sb-3",
          type: "text",
          data: {
            text: `The following query:`,
          },
        },

        {
          id: "isb-5",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT * 
FROM people
WHERE gender = "female" AND age < 30`,
          },
        },

        {
          id: "i2sb-4",
          type: "text",
          data: {
            text: `means that we are looking for all records that the gender is "female" and the age is less than 30.`,
          },
        },
      ],
    },

    {
      id: "i-b-3",
      sub_blocks: [
        {
          id: "i1sb-2",
          type: "text",
          data: {
            text: `The result will be`,
          },
        },

        {
          id: "isb-2",
          type: "table",
          data: {
            column: ["name", "age", "exp_years", "gender"],
            rows: [
              ["Ghully", 29, 1.5, "Female"],
              ["Pille", 29, 5, "Female"],
            ],
          },
        },

        {
          id: "i2sb-4",
          type: "text",
          data: {
            text: `Note: In SQL, string values can be written with either double quotes "female" or single quotes 'female': both are accepted in most SQL databases.`,
          },
        },
      ],
    },

    {
      id: "i-b-3",
      sub_blocks: [
        {
          id: "i1sb-2",
          type: "heading",
          data: {
            text: `The OR keyword`,
          },
        },

        {
          id: "i2sb-3",
          type: "text",
          data: {
            text: `TThe OR keyword means that we want one of the conditions to be true.

For example consider the following people table:`,
          },
        },

        {
          id: "isb-2",
          type: "table",
          data: {
            column: ["name", "age", "exp_years", "gender"],
            rows: [
              ["Ghully", 29, 1.5, "Female"],
              ["Bostal", 32, 2, "Male"],
              ["Pille", 29, 5, "Female"],
              ["Ghonu", 42, 12, "Male"],
              ["Chinu", 18, 2, "Male"],
              ["Kitk", 21, 21, "Male"],
            ],
          },
        },

        {
          id: "i2sb-3",
          type: "text",
          data: {
            text: `If we want to the employee whose is is lower than 22 or he/she has 10+ years of experiance, for thi query we will use OR keyword.`,
          },
        },
      ],
    },

    {
      id: "i-b-3",
      sub_blocks: [
        {
          id: "isb-5",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT * 
FROM people
WHERE gender =  age < 22 OR exp_years > 10`,
          },
        },

        {
          id: "i1sb-2",
          type: "text",
          data: {
            text: `The result will be`,
          },
        },

        {
          id: "isb-2",
          type: "table",
          data: {
            column: ["name", "age", "exp_years", "gender"],
            rows: [
              ["Ghonu", 42, 12, "Male"],
              ["Chinu", 18, 2, "Male"],
              ["Kitk", 21, 21, "Male"],
            ],
          },
        },
      ],
    },
  ],
};

const sec1chapter12 = {
  id: "Window Functions part 2",
  title: "Window Functions Part 2",
  order: 1,

  contents: [
    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1sb1",
          type: "heading",
          data: {
            text: `RANK & DENSE_RANK Functions`,
          },
        },

        {
          id: "wf1b1sb2",
          type: "text",
          data: {
            text: `ROW_NUMBER() is one type of ranking function, and there are two more: RANK() and DENSE_RANK().

The RANK() function numbers rows like ROW_NUMBER(), but it gives identical numbers for the same rows and skips numbers. DENSE_RANK() is similar to RANK(), but it does not skip numbers.

For example.`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["id", "level"],
            rows: [
              ["1", "5"],
              ["2", "6"],
              ["3", "6"],
              ["4", "7"],
              ["5", "7"],
              ["6", "5"],
            ],
          },
        },
      ],
    },

    {
      id: "wf1b4",
      sub_blocks: [
        {
          id: "wf1b1sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT id, 
       ROW_NUMBER() OVER (ORDER BY level) as row_num,
       RANK() OVER (ORDER BY level) as row_rank,
       DENSE_RANK() OVER (ORDER BY level) as row_dense_rank
FROM table1`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b4sb1",
          type: "text",
          data: {
            text: `This will return : `,
          },
        },

        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["id", "row_num", "row_rank", "row_dense_rank"],
            rows: [
              [1, 1, 1, 1],
              [6, 2, 1, 1],
              [2, 3, 3, 2],
              [3, 4, 3, 2],
              [4, 5, 5, 3],
              [5, 6, 5, 3],
            ],
          },
        },
      ],
    },

    {
      id: "wf1b5",
      sub_blocks: [
        {
          id: "wf1b4sb1",
          type: "text",
          data: {
            text: `Explanation:`,
          },
        },

        {
          type: "list",
          data: {
            lists: [`ROW_NUMBER(): Always unique: 1, 2, 3, 4, 5, 6`],
          },
        },

        {
          type: "list",
          data: {
            lists: [
              `RANK(): level 5 (2 rows): both get rank 1`,
              `level 6 (2 rows): both get rank 3 (skips 2)`,
              `level 7 (2 rows): both get rank 5 (skips 4)`,
            ],
          },
        },

        {
          type: "list",
          data: {
            lists: [
              `DENSE_RANK(): level 5 (2 rows): both get rank 1`,
              `level 6 (2 rows): both get rank 2 (no skip)`,
              `level 7 (2 rows): both get rank 3 (no skip)`,
            ],
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1sb1",
          type: "heading",
          data: {
            text: `NTILE Function`,
          },
        },

        {
          id: "wf1b1sb2",
          type: "text",
          data: {
            text: `NTILE(n) numbers the rows by splitting them into n approximately equal pieces. It is often used for performance enhancements - sending large amounts of data at once might be not a good idea, so this function allows to send smaller pieces at a time.

For example: we have table`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["id", "level"],
            rows: [
              [1, 4],
              [2, 4],
              [3, 5],
              [4, 6],
              [5, 7],
              [6, 7],
            ],
          },
        },

        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT id, level,
       NTILE(3) OVER (ORDER BY level) as pieces
from table1`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `This will return :
`,
          },
        },
        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["id", "level", "pieces"],
            rows: [
              [1, 4, 1],
              [2, 4, 1],
              [3, 5, 2],
              [4, 6, 2],
              [5, 7, 3],
              [6, 7, 3],
            ],
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b12s21",
          type: "text",
          data: {
            text: `We got 3 pieces: level 4 in piece 1, level 5 and level 6 in piece 2, and level 7 in piece 3.
When the number of rows isn't evenly divisible by n, NTILE distributes the rows as evenly as possible, with larger groups appearing first. For example, if you have 9 rows and NTILE(4), the distribution would be:`,
          },
        },

        {
          id: "wf1b122s1",
          type: "list",
          data: {
            lists: [
              "Group 1: 3 rows",
              "Group 2: 2 rows",
              "Group 3: 2 rows",
              "Group 4: 2 rows",
            ],
          },
        },

        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `This ensures that no group differs by more than one row from any other group, and any extra rows are distributed to the lower-numbered groups first.`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1sb1",
          type: "heading",
          data: {
            text: `Aggregation Functions`,
          },
        },

        {
          id: "wf1b1sb2",
          type: "text",
          data: {
            text: `Aggregation functions are used to calculate the AVG() or MAX() or any other aggregation function up until the current row.
For example, we could calculate the maximum revenue we got until each ending period:`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["month", "revenue", "region"],
            rows: [
              [4, 40, "East"],
              [5, 20, "East"],
              [6, 60, "West"],
              [7, 55, "West"],
              [8, 61, "East"],
            ],
          },
        },

        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT month, revenue,
       MAX(revenue) OVER (ORDER BY month ASC) as max_revenue
from table1`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `This will return :
`,
          },
        },
        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["month", "revenue", "max_revenue"],
            rows: [
              [4, 40, 40],
              [5, 20, 40],
              [6, 60, 60],
              [7, 55, 60],
              [8, 61, 61],
            ],
          },
        },

        {
          id: "wf1b12s21",
          type: "text",
          data: {
            text: `For months 4 and 5 the maximum revenue is 40, for months 6 and 7 it is 60, and for month 8 it is 61. This is because when it finds a new bigger revenue, it drops the old one and uses the biggest so far.`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `For AVG() function it will look like this:`,
          },
        },

        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT month, revenue,
       AVG(revenue) OVER (ORDER BY month ASC) as avg_revenue
from table11`,
          },
        },

        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["month", "revenue", "max_revenue"],
            rows: [
              [4, 40, 40],
              [5, 20, 30],
              [6, 60, 40],
              [7, 55, 43.75],
              [8, 61, 47.2],
            ],
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `We can also group our calculations by specific categories using PARTITION BY. For example:`,
          },
        },

        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT month, revenue, region,
       MAX(revenue) OVER (PARTITION BY region ORDER BY month ASC) as max_revenue
FROM table1`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `This will give you `,
          },
        },

        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["month", "revenue", "region", "max_revenue"],
            rows: [
              [4, 40, "East", 40],
              [5, 20, "East", 40],
              [6, 60, "West", 60],
              [7, 55, "West", 60],
              [8, 61, "East", 61],
            ],
          },
        },

        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `Now the maximum is calculated separately for each region. The East region and West region maintain their own running maximums independently.`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1sb1",
          type: "heading",
          data: {
            text: `ROWS & RANGE Criterion`,
          },
        },

        {
          id: "wf1b1sb2",
          type: "text",
          data: {
            text: `As of now, we can't be flexible regarding choosing how many rows before or after to take into account. Now it is possible with ROWS & RANGE criteria. To use them we write:`,
          },
        },

        {
          id: "wf1b1sb2",
          type: "text",
          data: {
            text: `OVER (ROWS BETWEEN --START-- AND --END--)

OVER (RANGE BETWEEN --START-- AND --END--)`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `And we can specify the following options::
`,
          },
        },

        {
          id: "wf1b12s1",
          type: "list",
          data: {
            lists: [
              "CURRENT ROW - the current row",
              "n PRECEDING - rows before the current row",
              "n FOLLOWING - rows after the current row",
            ],
          },
        },

        {
          id: "wf1b6sb4",
          type: "text",
          data: {
            text: `The difference between ROWS & RANGE is that ROWS criterion doesn't care about the values, just the positions, whereas RANGE defines the window in terms of value ranges rather than row positions.`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `For RANGE we must specify ORDER BY --column_name-- because if not it would not know how to choose the window.

For example:`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING`,
          },
        },

        {
          id: "wf1b12s21",
          type: "text",
          data: {
            text: `Here it creates a window that includes the current row, the row before it, and the row after it.`,
          },
        },

        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `RANGE BETWEEN 1 PRECEDING AND 1 FOLLOWING ORDER BY levels`,
          },
        },

        {
          id: "wf1b12s21",
          type: "text",
          data: {
            text: `Here it creates a window that includes for each level (sorted in ascending order) the current level, one level before it, and one level after it. If the current level is 5 then it will include levels 4, 5, and 6.`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `Note: The use of RANGE BETWEEN might result in more rows being included in your window, because it includes all rows that share the same values as those in the range, while ROWS BETWEEN will always include the same number of rows (as long as they are available in the data set). `,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `Also RANGE does not support date columns.

Here's a simple example to illustrate ROWS vs RANGE:`,
          },
        },

        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `Using ROWS : `,
          },
        },

        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT employee_name, salary,
      AVG(salary) OVER (
            ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
      ) as avg_salary_rows
FROM table_s`,
          },
        },

        {
          id: "wf21b12s1",
          type: "text",
          data: {
            text: `Using RANGE:`,
          },
        },

        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT employee_name, salary,
    AVG(salary) OVER (
        ORDER BY salary
        RANGE BETWEEN 1000 PRECEDING AND 1000 FOLLOWING
    ) as avg_salary_range
FROM table_s`,
          },
        },
      ],
    },

    {
      id: "s1c2b40",
      sub_blocks: [
        {
          type: "heading",
          id: "s1c2b3sw33",
          data: {
            text: `Congratulations You Compleated this Chapter (Window Functions Part 2). Click on button to moove forword.`,
          },
        },
      ],
    },
  ],
};

const sec1chapter1 = {
  id: "sql-sec1-chapter-1",
  title: "Fundamental of the SQL",
  order: 1,

  contents: [
    {
      id: "i-b-1",
      sub_blocks: [
        {
          id: "ic-content-1",
          type: "text",
          data: {
            text: `SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It allows users to store, retrieve, and analyze data efficiently, making it essential for businesses and organizations worldwide.`,
          },
        },
      ],
    },

    {
      id: "i1-b-2",
      sub_blocks: [
        {
          id: "isbc-1",
          type: "text",
          data: {
            text: `Databases are like large buckets that store data in an organized manner. Here are two examples of when we would like to create a database:`,
          },
        },
      ],
    },

    {
      id: "abc-x-q",
      sub_blocks: [
        {
          id: "asb-ss",
          type: "text",
          data: {
            text: `A database for a university to save data about students, courses, and lecturers. 
            A database for a car agency to track sales, car storage, and employees, and many more. `,
          },
        },

        {
          id: "asb-ss2",
          type: "text",
          data: {
            text: `          
            Inside a database there are tables, and each table has a name, column names, and rows.`,
          },
        },
      ],
    },

    {
      id: "i-qb-2",
      sub_blocks: [
        {
          id: "isb-2",
          type: "text",
          data: {
            text: `For example, this is a workers table:`,
          },
        },

        {
          id: "isb-2",
          type: "table",
          data: {
            column: ["firstname", "lastname", "age", "exp_years", "gender"],
            rows: [
              ["Ghully", "Thuas", 29, 1.5, "Female"],
              ["Bostal", "Shkolky", 32, 2, "Male"],
              ["Pille", "Shury", 29, 5, "Female"],
            ],
          },
        },

        {
          id: "isb-3",
          type: "text",
          data: {
            text: `The workers table has 5 data columns (firstname, lastname, age, exp_years, gender) and 3 rows.

We don't need any special tool to know that we have 3 workers, and it's easy to calculate the average age of all of them (29 + 32 + 21) / 3.

But what happens when we have a thousand or even a million rows?`,
          },
        },
      ],
    },

    {
      id: "i-b-3",
      sub_blocks: [
        {
          id: "i1sb-2",
          type: "text",
          data: {
            text: `
That's where databases and SQL (Structured Query Language) come in.

SQL is a standard language designed specifically for managing and manipulating data in databases.

Databases store all of the tables, and SQL helps us extract and analyze the data we need.`,
          },
        },

        {
          id: "i2sb-3",
          type: "text",
          data: {
            text: `To extract the whole table from the database, we need to specify which columns to SELECT and FROM which table to extract.

To do this we'll write:`,
          },
        },

        {
          id: "isb-5",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT column1, column2, column3 FROM table_name`,
          },
        },

        {
          id: "i2sb-4",
          type: "text",
          data: {
            text: `It will give all rows of specified columns in SELECT clause.`,
          },
        },
      ],
    },
  ],
};

const sec1chapter10 = {
  id: "sql-sec1-chapter-2",
  title: "Multiple Tables",
  order: 2,

  contents: [
    {
      id: "s1c2b1",
      sub_blocks: [
        {
          id: "s1c2b1sb1",
          type: "text",
          data: {
            text: `As of now, we worked with single table, Now we will see how to handle multiple tables.
            Lets assume we have the following tables`,
          },
        },
      ],
    },

    {
      id: "s1c2b2",
      sub_blocks: [
        {
          id: "s1c2b2sb1",
          type: "table",
          data: {
            column: ["course_id", "lecture_id"],
            rows: [
              ["1", "2"],
              ["4", "5"],
            ],
          },
        },

        {
          id: "s1c2b2sb1",
          type: "table",
          data: {
            column: ["lecture_id", "Name"],
            rows: [
              ["2", "Mahtab Shah"],
              ["3", "Shole"],
              ["5", "Nunnu"],
            ],
          },
        },
      ],
    },

    {
      id: "s1c2b3",
      sub_blocks: [
        {
          id: "s1c2b3sb1",
          type: "text",
          data: {
            text: `Now our query is to present each course with the corrosponding lecturer's name.
            `,
          },
        },

        {
          id: "s1c2b3sb2",
          type: "text",
          data: {
            text: `We can achieve this by two ways, The first Approach is:
            For each option in first table we try to match with other table's rows. We check a condition, if that condition met, we combined both rows into single one.
            For example: for courses, we will check for lecutre_id 2 to all lecture_ids in lectures table. In lectures table only first row will match. As first row has lecture_id 2.

            `,
          },
        },
      ],
    },

    {
      id: "s1c2b4",
      sub_blocks: [
        {
          id: "s1c2b4sb1",
          type: "text",
          data: {
            text: `
             The result will be for both tables:
            `,
          },
        },
        {
          id: "s1c2b4sb3",
          type: "table",
          data: {
            column: ["course_id", "lecture_id", "Name"],
            rows: [
              ["1", "2", "Mahtab Shah"],
              ["4", "5", "Shole"],
            ],
          },
        },
      ],
    },

    {
      id: "s1c2b5",
      sub_blocks: [
        {
          id: "s1c2b5sb1",
          type: "text",
          data: {
            text: `
             Option 1:
            `,
          },
        },
        {
          id: "s1c2b5sb2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT courses.course_id,
       lecturers.name AS lecturer_name
FROM courses, lectures
WHERE courses.lecturer_id == lecturers.lecturer_id`,
          },
        },
      ],
    },

    {
      id: "s1c2b6",
      sub_blocks: [
        {
          id: "s1c2b5sb1",
          type: "text",
          data: {
            text: `In this method, we write two tables in the FROM keyword, and in the WHERE clause we made a condition on lecturer_id should be same. In the SELECT clause, we now write table.column so that the database will know where to fetch the column.`,
          },
        },
        {
          id: "s1c2b5sb2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT courses.course_id,
       lecturers.name AS lecturer_name
FROM courses, lectures
WHERE courses.lecturer_id == lecturers.lecturer_id
            `,
          },
        },
      ],
    },

    {
      id: "s1c2b7",
      sub_blocks: [
        {
          id: "s1c2b7sb1",
          type: "text",
          data: {
            text: `
             Option 2:
            `,
          },
        },
        {
          id: "s1c2b7sb2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT courses.course_id,
       lecturers.name AS lecturer_name
FROM courses
     JOIN lecturers ON courses.lecturer_id == lecturers.lecturer_id`,
          },
        },

        {
          id: "s1c2b7sb3",
          type: "text",
          data: {
            text: `Instead of WHERE we use JOIN table ON condition.
            This type of join is also called inner join.
            `,
          },
        },
      ],
    },

    {
      id: "s1c2b8",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b8q1",
          type: "quiz",
          data: [
            {
              question: "Complete the query to join courses with lecturers:",
              type: "code",
              data: {
                code: `SELECT courses.course_id, lecturers.name
FROM courses
     ___ lecturers ___ courses.lecturer_id = lecturers.lecturer_id`,
                language: "sql",
              },
              options: [
                "FROM & AND",
                "JOIN & WHERE",
                "JOIN & ON",
                "FROM & WHERE",
              ],
              answer: 2,
            },

            {
              question: "What does the JOIN keyword do?",
              type: "text",
              options: [
                "Creates a new table from existing data",
                "Deletes duplicate rows from a table",
                "Union All the tables",
                "Combines rows from two tables based on a conditon",
              ],
              answer: 3,
            },

            {
              question:
                "The query FROM courses, lecturers WHERE courses.lecturer_id = lecturers.lecturer_id performs an inner join.",
              type: "text",
              options: ["True", "False"],
              answer: 0,
            },

            {
              question:
                "When joining tables, you must use table.column notation to specify which table a column belongs to.",
              type: "text",
              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "Both query will give same reuslt ?",
              type: "text",
              data: {
                text: `Using WHERE with multiple tables in FROM, or useinf JOIN....ON`,
              },
              options: ["True", "False"],
              answer: 0,
            },
          ],
        },
      ],
    },

    {
      id: "s1c2b9",
      sub_blocks: [
        {
          id: "s1c2b9sb1",
          type: "text",
          data: {
            text: `Joins can also be used on tables that we create. To combine nested tables with joins we need to add AS to identify the nested query with a name.
            `,
          },
        },
      ],
    },

    {
      id: "s1c2b10",
      sub_blocks: [
        {
          id: "s1c2b10sb1",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT table1.col1, table2.col2 .......
FROM table1,
     (SELECT * FROM tableA) AS table2
WHERE table1.id = table2.id`,
          },
        },
      ],
    },

    {
      id: "s1c2b11",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b11q1",
          type: "quiz",
          data: [
            {
              question:
                "Which syntax correctly joins a table with a nested query?",
              type: "text",

              options: [
                "FROM orders, AS p (SELECT * FROM products)",
                "FROM orders, AS (SELECT * FROM product) p",
                "FORM orders, (SELECT * FROM products) AS p",
                "FROM orders, (SELECT * From products AS p)",
              ],
              answer: 2,
            },

            {
              question: "What does the JOIN keyword do?",
              type: "code",
              data: {
                language: "sql",
                code: `SELECT t1.name, t2.total
FROM table1 as t1,
     (SELECT * FROM table2) ____ t2
WHERE t1.id = t2.id`,
              },
              options: ["NAMED", "CALLED", "DEF", "AS"],
              answer: 3,
            },

            {
              question:
                "A nested query used in a join must be given an alias to be referenced in the WHERE clause.",
              type: "text",
              options: ["False", "True"],
              answer: 1,
            },

            {
              question:
                "When joining tables, you must use table.column notation to specify which table a column belongs to.",
              type: "text",
              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "Why does this query fail?",
              type: "code",
              data: {
                language: "sql",
                code: `SELECT t1.col1, t2.col2
                FROM table1 AS t1, (SELECT * FROM table2)
                WHERE t1.id = t2.id`,
              },
              options: [
                "WHERE clause is missig",
                "The SELECT * is invalid",
                "The nested query has no alias",
                "Can'nt be join multiple table using FROM",
              ],
              answer: 2,
            },

            {
              question:
                "What keyword is required to name a nested query for use in a join?",
              type: "text",
              options: ["NAME", "KNOW", "AS", "ALIAS"],
              answer: 2,
            },
          ],
        },
      ],
    },

    {
      id: "s1c2b12",
      sub_blocks: [
        {
          id: "s1c2b12sb2",
          type: "heading",
          data: {
            text: `Self Join`,
          },
        },
        {
          id: "s1c2b12sb2",
          type: "text",
          data: {
            text: `Self-joins are different types of joins. As of now, we talked about multiple table joins, but self-joins are joined to the same table. A classic example would be a table of employees.`,
          },
        },
      ],
    },

    {
      id: "s1c2b12",
      sub_blocks: [
        {
          id: "s1c2b12sb1",
          type: "table",
          data: {
            column: ["employee_id", "employee_name", "manager_id"],
            rows: [
              [1, "Mahtab", 3],
              [2, "Shah", 3],
              [3, "Jacob", 4],
              [4, "Alice", ""],
            ],
          },
        },
      ],
    },

    {
      id: "s1c2b13",
      sub_blocks: [
        {
          id: "s1c2b13sb1",
          type: "text",
          data: {
            text: `Every employee has a manager except the highest manager, and every manager is also an employee.

The problem: For each employee we want to know the manager's name.  `,
          },
        },
      ],
    },

    {
      id: "s1c2b14",
      sub_blocks: [
        {
          id: "s1c2b14sb1",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT e.employee_id, e.employee_name, m.employee_name AS manager_name
FROM employees e
     JOIN employees m ON e.manager_id = m.employee_id
WHERE e.manager_id IS NOT NULL`,
          },
        },

        {
          id: "s1c2b14sb2",
          type: "text",
          data: {
            text: `We join between the same table except one time we call it 'e' and the second time it is 'm'. The join is between the fields employee_id and manager_id.`,
          },
        },
      ],
    },

    {
      id: "s1c2b15",
      sub_blocks: [
        {
          id: "s1c2b14sb1",
          type: "text",
          data: {
            text: `The result is:`,
          },
        },
        {
          id: "s1c2b15sb2",
          type: "table",
          data: {
            column: ["employee_id", "employee_name", "manager_name"],
            rows: [
              [1, "Mahtab", "Jacob"],
              [2, "Shah", "Jacob"],
              [3, "Jacob", "Alice"],
            ],
          },
        },
      ],
    },
    {
      id: "s1c2b16",
      sub_blocks: [
        {
          id: "s1c2b16sb1",
          type: "text",
          data: {
            text: `Notice, employee 'Mahtab' and 'Shah' has same manager_id which is Jacob while Jacob manager_id is 4 which is Alice's id.`,
          },
        },

        {
          id: "s1c2b16sb2",
          type: "text",
          data: {
            text: `In a self-join, you must use different table aliases to distinguish between the two references to the same table.`,
          },
        },
      ],
    },

    {
      id: "s1c2b17",
      sub_blocks: [
        {
          id: "s1c2b17sb1",
          type: "heading",
          data: {
            text: `Union`,
          },
        },
        {
          id: "s1c2b17sb2",
          type: "text",
          data: {
            text: `Unions are different from joins. Joins are using conditions to combine tables but unions just add two tables on top of the other. To use UNION we will write:`,
          },
        },
      ],
    },

    {
      id: "s1c2b18",
      sub_blocks: [
        {
          id: "s1c2b18sb1",
          type: "code",
          data: {
            language: `sql`,
            code: `SELECT col1, col2, col3 ..... FROM table1
UNION 
SELECT col1, col2, col3 ..... FROM table2`,
          },
        },
        {
          id: "s1c2b17sb2",
          type: "text",
          data: {
            text: `Both SELECTS must obey the following rules:
`,
          },
        },
        {
          id: "s1c2b17sb3",
          type: "text",
          data: {
            text: `1. The number of fields should be equal
            2. Order is important
            3. The columns in the same place must match the data types`,
          },
        },
        {
          id: "s1c2b17sb4",
          type: "text",
          data: {
            text: `For example, let's assume we have the following tables:`,
          },
        },
      ],
    },

    {
      id: "s1c2b19",
      sub_blocks: [
        {
          id: "s1c2b19sb2",
          type: "text",
          data: {
            text: "Indian People",
          },
        },
        {
          id: "s1c2b19sb1",
          type: "table",
          data: {
            column: ["id", "name"],
            rows: [
              [1, "Saleh"],
              [2, "Jacob"],
            ],
          },
        },

        {
          id: "s1c2b19sb4",
          type: "text",
          data: {
            text: "Russian People",
          },
        },
        {
          id: "s1c2b19sb5",
          type: "table",
          data: {
            column: ["id", "name"],
            rows: [
              [4, "Jisan"],
              [5, "Fredix"],
            ],
          },
        },

        {
          id: "s1c2b19sb4",
          type: "text",
          data: {
            text: "American People",
          },
        },
        {
          id: "s1c2b19sb9",
          type: "table",
          data: {
            column: ["id", "name"],
            rows: [
              [7, "Willium"],
              [2, "Jacob"],
            ],
          },
        },
      ],
    },

    {
      id: "s1c2b21",
      sub_blocks: [
        {
          id: "s1c2b21sb1",
          type: "text",
          data: {
            text: `Now if we want make big table of the names, so we will do UNION`,
          },
        },

        {
          id: "s1c2b21sb2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT names FROM indian_table
UNION
SELECT names FROM russian_table
UNION
SELECT names FROM american_table`,
          },
        },
      ],
    },

    {
      id: "s1c2b20",
      sub_blocks: [
        {
          id: "s1c2b20sb4",
          type: "text",
          data: {
            text: "The result will be all people's name",
          },
        },
        {
          id: "s1c2b20sb1",
          type: "table",
          data: {
            column: ["name"],
            rows: [["Saleh"], ["Jacob"], ["Jisan"], ["Fredix"], ["Willium"]],
          },
        },
      ],
    },

    {
      id: "s1c2b22",
      sub_blocks: [
        {
          id: "s1c2b22sb4",
          type: "text",
          data: {
            text: "Note UNION only return DISTINCT names, while see above table, Jacob came in American and Indian people table also. So if we want all the records we use UNION ALL",
          },
        },
        {
          id: "s1c2b22sb2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT names FROM indian_table
UNION ALL
SELECT names FROM russian_table
UNION ALL
SELECT names FROM american_table`,
          },
        },
      ],
    },

    {
      id: "s1c2b23",
      sub_blocks: [
        {
          id: "s1c2b23sb4",
          type: "text",
          data: {
            text: "The result will be all people's name",
          },
        },
        {
          id: "s1c2b23sb1",
          type: "table",
          data: {
            column: ["name"],
            rows: [
              ["1. Saleh"],
              ["2. Jacob"],
              ["3. Jisan"],
              ["4. Fredix"],
              ["5. Willium"],
              ["6. Jacob"],
            ],
          },
        },
      ],
    },

    {
      id: "s1c2b24",
      sub_blocks: [
        {
          id: "s1c2b24sb1",
          type: "text",
          data: {
            text: `You can also combine UNION ALL with aggregate functions, GROUP BY, and ORDER BY to summarize data across multiple tables. The trick is to wrap the UNION ALL inside a subquery, then apply grouping and sorting on top of it.`,
          },
        },
      ],
    },

    {
      id: "s1c2b25",
      sub_blocks: [
        {
          id: "s1c2b25sb1",
          type: "text",
          data: {
            text: `For example, suppose we want to count how many times each name appears across both tables:
`,
          },
        },

        {
          id: "s1c2b25sb2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name, COUNT(*) AS total_count
FROM (
    SELECT name FROM indean_people
    UNION ALL
    SELECT name FROM american_people
    UNION ALL
    SELECT name FROM russian_people
) AS combined
GROUP BY name
ORDER BY total_count DESC`,
          },
        },
      ],
    },

    {
      id: "s1c2b26",
      sub_blocks: [
        {
          id: "s1c2b26sb1",
          type: "text",
          data: {
            text: "The result will Be :",
          },
        },
        {
          id: "s1c2b26sb1",
          type: "table",
          data: {
            column: ["name", "total_count"],
            rows: [
              ["1. Saleh", 1],
              ["2. Jacob", 2],
              ["3. Jisan", 1],
              ["4. Fredix", 1],
              ["5. Willium", 1],
            ],
          },
        },

        {
          id: "s1c2b26sb3",
          type: "text",
          data: {
            text: `Here, UNION ALL (not UNION ) is used so that duplicates like Lena are kept. Otherwise they would be removed before counting. The subquery merges all rows, and then GROUP BY +  COUNT summarize them. ORDER BY sorts the final result.`,
          },
        },
      ],
    },

    {
      id: "s1c2b27",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b27q1",
          type: "quiz",
          data: [
            {
              question:
                "Complete the query to combine all names including duplicates",
              type: "code",
              data: {
                code: `SELECT name FROM customers
UNION ALL
SELECT name FROM suppliers`,
                language: "sql",
              },
              options: ["UNION", "JOIN & ON", "UNION ALL", "CONCAT BOTH"],
              answer: 2,
            },

            {
              question: "What is the key difference between UNION and JOIN?",
              type: "text",
              options: [
                "JOIN removes duplicate values automatically",
                "UNION and JOIN are interchangeable operations",
                "UNION stacks tables vertically, JOIN combines tables horizontally using conditions",
                "UNION requires matching conditions between tables",
              ],
              answer: 2,
            },

            {
              question:
                "When using UNION, the columns in corresponding positions must have compatible data types.",
              type: "text",
              options: ["True", "False"],
              answer: 0,
            },

            {
              question:
                "A UNION between a SELECT with 3 columns and a SELECT with 2 columns will execute successfully.",
              type: "text",
              options: ["True", "False"],
              answer: 1,
            },

            {
              question: "What does UNION do with duplicate rows?",
              type: "text",
              options: [
                "Keeps all duplicates in the result",
                "Removes duplicates, returning only distinct values",
                "Merges duplicates into a single row with combined data",
                "Throws an error when duplicates exist",
              ],
              answer: 1,
            },
          ],
        },
      ],
    },

    {
      id: "s1c2b3",
      sub_blocks: [
        {
          id: "s1c2b3sb1",
          type: "heading",
          data: {
            text: `Simplify queries, WITH keyword.
            `,
          },
        },

        {
          id: "s1c2b3sb2",
          type: "text",
          data: {
            text: `Queries can get too messy by adding many inner queries. For example here is a query that has many sub-queries:`,
          },
        },
      ],
    },

    {
      id: "s1c2b30",
      sub_blocks: [
        {
          id: "s1c2b3swb2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT * FROM table1
WHERE col2 IN (
    SELECT col1 FROM table2
    WHERE col3 + col2 > 3 AND col5 LIKE '%test%' AND col6 IN (
        SELECT col5 FROM table3
        WHERE col1 AND col3 OR col2
    )
)`,
          },
        },
      ],
    },

    {
      id: "s1c2b31",
      sub_blocks: [
        {
          id: "s1c2b3s3wb2",
          type: "text",
          data: {
            text: `To make it easier we can use the WITH query_name AS (...) keyword. It allows us to save a query with a name and use it wherever we want:`,
          },
        },
      ],
    },

    {
      id: "s1c2b33",
      sub_blocks: [
        {
          id: "s1c2b3sw32",
          type: "code",
          data: {
            language: "sql",
            code: `WITH query1 AS (
    SELECT col5 FROM table3
    WHERE col1 AND col3 OR col2
), query2 AS (
    SELECT col1 FROM table2
    WHERE col3 + col2 > 3 AND col5 LIKE '%test%' AND col6 IN query1
)
SELECT * FROM table1
WHERE col2 IN (SELECT col1 FROM query2) AND col4 IN (SELECT col5 FROM query1)`,
          },
        },

        {
          type: "text",
          id: "s1c2b3sw33",
          data: {
            text: `Here we reused query1 in query2 and in the main query.`,
          },
        },
      ],
    },

    {
      id: "s1c2b37",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b37q1",
          type: "quiz",
          data: [
            {
              question: "What is the purpose of WITH ... AS in SQL?",
              type: "text",
              data: {
                text: ``,
              },
              options: [
                "To name and reuse subqueries",
                "To create permanent tables",
                "To add comments to queries",
              ],
              answer: 0,
            },

            {
              question: "Define a named query called active_users ?",
              type: "code",
              data: {
                language: "sql",
                code: `___ active_users ___ (
    SELECT * FROM users WHERE status = 'active'
)
SELECT * FROM active_users`,
              },

              options: [
                "CREATE & WITH",
                "WITH & AS",
                "DEFINE & AS",
                "AS & WITH",
              ],
              answer: 1,
            },

            {
              question:
                "A named query defined second in a WITH clause can reference a named query defined first.",
              type: "text",
              options: ["True", "False"],
              answer: 0,
            },

            {
              question:
                "What separates multiple named queries in a WITH clause?",
              type: "text",
              options: [
                "The AND keyword",
                "Another WITH keyword",
                "A comma",
                "A semicolon",
              ],
              answer: 2,
            },
          ],
        },
      ],
    },

    {
      id: "s1c2b40",
      sub_blocks: [
        {
          type: "heading",
          id: "s1c2b3sw33",
          data: {
            text: `Congratulations You Compleated this Chapter. Click on button to moove forword.`,
          },
        },
      ],
    },
  ],
};

const sec1chapter11 = {
  id: "Window Functions part 1",
  title: "Window Functions Part 1",
  order: 1,

  contents: [
    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1sb1",
          type: "heading",
          data: {
            text: `ROW_NUMBER Function`,
          },
        },

        {
          id: "wf1b1sb2",
          type: "text",
          data: {
            text: `Window functions perform calculations across a set of table rows related to the current row. Unlike regular aggregate functions, window functions don't collapse the results into a single row.`,
          },
        },
      ],
    },

    {
      id: "wf1b2",
      sub_blocks: [
        {
          id: "wf1b2sb1",
          type: "text",
          data: {
            text: `They're particularly useful when you need to:`,
          },
        },

        {
          id: "wf1b1sb2",
          type: "list",
          data: {
            lists: [
              "Calculate running totals",
              "Rank items within groups",
              "Compare current rows with previous/following rows",
              "Analyze trends over time periods",
            ],
          },
        },
      ],
    },

    {
      id: "wf1b3",
      sub_blocks: [
        {
          id: "wf1b3sb1",
          type: "text",
          data: {
            text: `For example here are some real world examples for window functions use-case:`,
          },
        },

        {
          id: "wf1b3sb2",
          type: "text",
          data: {
            text: `Sales Analysis`,
          },
        },

        {
          id: "wf1b1sb3",
          type: "list",
          data: {
            lists: [
              "Calculate cumulative sales up to each year (1995, 1997, 1999)",
              "Find top-selling products for each quarter",
            ],
          },
        },

        {
          id: "wf1b3sb4",
          type: "text",
          data: {
            text: `Sports Statistics`,
          },
        },

        {
          id: "wf1b1sb4",
          type: "list",
          data: {
            lists: [
              "Track Olympic medal counts across different years",
              "Identify leading athletes in each competition period (2000, 2004, 2008)",
            ],
          },
        },
      ],
    },

    {
      id: "wf1b4",
      sub_blocks: [
        {
          id: "wf1b4sb1",
          type: "text",
          data: {
            text: `ROW_NUMBER() is one of the simplest window functions. It assigns a unique sequential number to each row in the result set. Here how to use it:`,
          },
        },

        {
          id: "wf1b1sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT column1, column2,
       ROW_NUMBER() OVER ([PARTITION BY column] [ORDER BY column]) as row_num
FROM table_name;`,
          },
        },
      ],
    },

    {
      id: "wf1b5",
      sub_blocks: [
        {
          id: "wf1b4sb1",
          type: "text",
          data: {
            text: `It is mandatory to use the OVER clause with ROW_NUMBER() : ROW_NUMBER() OVER ()`,
          },
        },
        {
          id: "wf1b1sb3",
          type: "text",
          data: {
            text: `For Example : `,
          },
        },
      ],
    },

    {
      id: "wf1b6",
      sub_blocks: [
        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT product_name, sale_date,
       ROW_NUMBER() OVER () as row_num
FROM sales;`,
          },
        },

        {
          id: "wf1b6sb3",
          type: "text",
          data: {
            text: `This adds a row_num column that counts from 1 to the total number of rows.

Note: The OVER clause can contain ordering and partitioning instructions to control how the numbering works.`,
          },
        },
      ],
    },

    {
      id: "s1c3b8",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b8q1",
          type: "quiz",
          data: [
            {
              question: "Which task is window functions best suited for?",
              type: "text",

              options: [
                "Joining multiple tables together",
                "Deleting duplicate records from a table",
                "Creating new tables from existing data",
                "Calculating running totals while showing each row",
              ],
              answer: 3,
            },

            {
              question: "What does ROW_NUMBER() OVER () return?",
              type: "text",
              options: [
                "The row's position in the original table",
                "A random number for each row",
                "A unique sequential number for each row",
                "The total count of all rows",
              ],
              answer: 2,
            },

            {
              question: "Complete the query to add row numbers to the results",
              type: "code",
              data: {
                language: "sql",
                code: `SELECT product_name, sale_date,
       ___ ___ () as row_num
FROM sales;`,
              },
              options: ["SUM() & WITH", "COUNT() & BY", "ROW_NUMBER() & OVER"],
              answer: 2,
            },

            {
              question: "The OVER clause is optional when using ROW_NUMBER().",
              type: "text",
              options: ["True", "False"],
              answer: 1,
            },

            {
              question:
                "What makes window functions different from regular aggregate functions?",

              options: [
                "They don't collapse results into a single row",
                "They run faster than aggregate functions",
                "They can only work with numeric data",
                "They don't require the OVER clause",
              ],
              answer: 0,
            },
          ],
        },
      ],
    },

    {
      id: "s1c3b9",
      sub_blocks: [
        {
          id: "wf1b6sb3",
          type: "text",
          data: {
            text: `ORDER BY criterion :
            One of the OVER() options are the ORDER BY`,
          },
        },
        ,
        {
          id: "wf1b6sb4",
          type: "code",
          data: {
            language: "sql",
            code: `ROW_NUMBER() OVER (ORDER BY year DESC) as row_num`,
          },
        },

        {
          id: "wf1b6sb3",
          type: "text",
          data: {
            text: `This will generate a column that will number the rows following the descending year order.`,
          },
        },
      ],
    },

    {
      id: "s1c3b8",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b8q1",
          type: "quiz",
          data: [
            {
              question:
                "The ORDER BY clause can be used inside the OVER() clause of a window function.",
              type: "text",

              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "ROW_NUMBER() can be used without the OVER() clause.",
              type: "text",
              options: ["True", "False"],
              answer: 1,
            },

            {
              question:
                "Complete the window function to number rows by ascending score.",
              type: "code",
              data: {
                language: "sql",
                code: `SELECT name, score,
       ROW_NUMBER() ___ (___ BY score ASC) as rank
FROM players`,
              },
              options: [
                "OVER & SORT",
                "PARTITION & ORDER",
                "GROUP & OVER",
                "OVER & ORDER",
              ],
              answer: 3,
            },

            {
              question:
                "What does ROW_NUMBER() OVER (ORDER BY year DESC) produce?",
              type: "text",
              options: [
                "Sequential numbers based on descending year order",
                "Random numbers assigned to each row",
                "The actual year values in descending order",
                "A count of total rows in the table",
              ],
              answer: 0,
            },
          ],
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1s1",
          type: "heading",
          data: {
            text: `PARTITION BY criterion`,
          },
        },

        {
          id: "wf1b1s2",
          type: "text",
          data: {
            text: `Another option for the OVER () clause is PARTITION BY
It allows us to number the rows for each group separately `,
          },
        },

        {
          id: "wf1b1s3",
          type: "text",
          data: {
            text: `For Example, see the table given below:`,
          },
        },
      ],
    },

    {
      id: "wf1b12",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["id", "type"],
            rows: [
              ["132", "t1"],
              ["52", "t2"],
              ["92", "t1"],
              ["154", "t3"],
              ["198", "t1"],
            ],
          },
        },
      ],
    },

    {
      id: "wf1b14",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT id, type,
       ROW_NUMBER() OVER (PARTITION BY type ORDER BY id) as row_num
FROM table1`,
          },
        },

        {
          id: "wf1b15",
          type: "text",
          data: {
            text: `This will generate a column that numbers the rows of each type separately, in id order (the result below is shown grouped by type):`,
          },
        },
      ],
    },

    {
      id: "wf1b15",
      sub_blocks: [
        {
          id: "wf1b15s1",
          type: "table",
          data: {
            column: ["id", "type", "row_num"],
            rows: [
              [92, "t1", 1],
              [132, "t1", 2],
              [198, "t1", 3],
              [52, "t2", 1],
              [154, "t3", 1],
            ],
          },
        },

        {
          id: "wf1b16s2",
          type: "text",
          data: {
            text: `id 92 has row_num 1 because it is the smallest id in type t1.

Note: ROW_NUMBER() requires an ORDER BY clause within the OVER() to determine how rows should be numbered within each partition.`,
          },
        },
      ],
    },

    {
      id: "wf1b16",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `We can even specify multiple columns inside the PARTITION BY:`,
          },
        },

        {
          id: "wf1b15",
          type: "code",
          data: {
            language: "sql",
            code: `ROW_NUMBER() OVER (PARTITION BY type, hue ORDER BY id)`,
          },
        },
      ],
    },

    {
      id: "s1c3b17",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b8q1",
          type: "quiz",
          data: [
            {
              question:
                "When using PARTITION BY, the ORDER BY clause inside OVER() determines the sequence in which rows are numbered within each partition.",
              type: "text",

              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "You can specify multiple columns inside PARTITION BY.",
              type: "text",
              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "Number products within each category by price",
              type: "code",
              data: {
                language: "sql",
                code: `SELECT name, category,
         ROW_NUMBER() OVER (___ category ORDER BY price) as rank
FROM products`,
              },
              options: ["GROUP BY", "PARTITION BY", "ORDER BY"],
              answer: 1,
            },

            {
              question: "What does PARTITION BY do in a window function?",
              type: "text",
              options: [
                "Filters rows based on a condition",
                "Removes duplicate rows",
                "Numbers rows separately within each group",
                "Sorts the entire result set",
              ],
              answer: 2,
            },

            {
              question:
                "Given rows with types 'A', 'A', 'B', what row_num does the second 'A' row get?",
              type: "code",
              data: {
                language: "sql",
                code: `ROW_NUMBER() OVER (PARTITION BY type ORDER BY id)`,
              },
              options: [0, 3, 1, 2],
              answer: 3,
            },
          ],
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1s1",
          type: "heading",
          data: {
            text: `PARTITION & ORDER`,
          },
        },

        {
          id: "wf1b1s2",
          type: "text",
          data: {
            text: `We can also combine PARTITION BY with ORDER BY. For example consider the following table1:
`,
          },
        },
        {
          id: "wf1b12s1",
          type: "table",
          data: {
            column: ["id", "type"],
            rows: [
              ["132", "t1"],
              ["52", "t2"],
              ["92", "t1"],
              ["154", "t3"],
              ["198", "t1"],
            ],
          },
        },
      ],
    },

    {
      id: "wf1b16",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `We can even specify multiple columns inside the PARTITION BY:`,
          },
        },

        {
          id: "wf1b15",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT id, type,
       ROW_NUMBER() OVER(PARTITION BY type ORDER BY id) as row_num
FROM table1`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `This will number the rows in ascending order by the id of each type:
`,
          },
        },

        {
          id: "wf1b15s1",
          type: "table",
          data: {
            column: ["id", "type", "row_num"],
            rows: [
              [132, "t1", 2],
              [52, "t2", 1],
              [92, "t1", 1],
              [154, "t3", 1],
              [198, "t1", 3],
            ],
          },
        },

        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `Now id 132 has row_num 2 because it is larger than 92 and smaller than 198 (of all the t1 type rows).`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b1s1",
          type: "heading",
          data: {
            text: `LEAD & LAG Functions`,
          },
        },

        {
          id: "wf1b1s2",
          type: "text",
          data: {
            text: `The LEAD and LAG functions allow us to access the value of the current row by n steps back or n steps ahead.

For example, if we want to calculate the ratio of a company's revenue for the current row and one month ago, we can extract the value from the previous month:
`,
          },
        },

        {
          id: "wf1b1s3",
          type: "text",
          data: {
            text: `For Example, see the table given below:`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b15s1",
          type: "table",
          data: {
            column: ["id", "revenue", "month"],
            rows: [
              [1, 532, 5],
              [2, 492, 6],
              [3, 393, 7],
              [4, 723, 8],
            ],
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT id, revenue,
       LAG(revenue, 1) OVER (ORDER BY MONTH) as prev_month_revenue
FROM table1 ORDER BY id`,
          },
        },

        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `This will create the following table:`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b15s1",
          type: "table",
          data: {
            column: ["id", "revenue", "prev_month_revenue"],
            rows: [
              [1, 532, "NULL"],
              [2, 492, 532],
              [3, 393, 492],
              [4, 723, 393],
            ],
          },
        },

        {
          id: "abcds",
          type: "text",
          data: {
            text: "This way we can calculate the prev_month_revenue/revenue ratio.",
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b12s1",
          type: "text",
          data: {
            text: `If we instead used the LEAD function, it would take the next month's revenue of each row:`,
          },
        },
        {
          id: "wf1b12s1",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT id, revenue,
       LAG(revenue, 1) OVER (ORDER BY MONTH) as prev_month_revenue
FROM table1 ORDER BY id`,
          },
        },
      ],
    },

    {
      id: "wf1b1",
      sub_blocks: [
        {
          id: "wf1b15s1",
          type: "table",
          data: {
            column: ["id", "revenue", "prev_month_revenue"],
            rows: [
              [1, 532, 492],
              [2, 492, 393],
              [3, 393, 723],
              [4, 723, "NULL"],
            ],
          },
        },
      ],
    },

    {
      id: "s1c3b8",
      type: "quiz",
      sub_blocks: [
        {
          id: "s1c2b8q1",
          type: "quiz",
          data: [
            {
              question: "What does LAG(revenue, 1) return?",
              type: "text",

              options: [
                "revenue from the next row",
                "The minimum revenue value",
                "revenue from the previous row",
                "The sum of all previous revenues",
              ],
              answer: 2,
            },

            {
              question:
                "The first row in a LAG result will always contain NULL for the lagged column when using an offset of 1.",
              type: "text",
              options: ["True", "False"],
              answer: 0,
            },

            {
              question:
                "Complete the query to get each row's revenue from 2 months ago:",
              type: "code",
              data: {
                language: "sql",
                code: `SELECT revenue,
         LAG(revenue, 1) OVER (ORDER BY month) as prev_revenue
FROM sales`,
              },
              options: ["PREV & 2", "LEAD & 2", "LAG & 2", , "LAG & -2"],
              answer: 2,
            },

            {
              question: "Which function retrieves the next row's value?",
              type: "text",
              options: ["FORWARD", "LAG", "NEXT", "LEAD"],
              answer: 3,
            },
          ],
        },
      ],
    },

    {
      id: "s1c2b40",
      sub_blocks: [
        {
          type: "heading",
          id: "s1c2b3sw33",
          data: {
            text: `Congratulations You Compleated this Chapter. Click on button to moove forword.`,
          },
        },
      ],
    },
  ],
};

const sec1chapters = [
  sec1chapter1,
  sec1chapter2,
  sec1chapter10,
  sec1chapter11,
  sec1chapter12,
];

const sections1 = [
  {
    id: "sql-section-1",
    title: "SQL Introduction",
    order: 1,
    chapters: [...sec1chapters],
  },
];

const sec2chapter1 = {
  id: "sql-sec2-chapter-1",
  title: "Conditional Logic",
  order: 1,

  contents: [
    // -----------------------------------------------------
    // BLOCK 1 — CASE INTRODUCTION
    // -----------------------------------------------------

    {
      id: "case-block-1",
      sub_blocks: [
        {
          id: "case-content-1",
          type: "text",
          data: {
            text: `A CASE expression is used to apply conditional logic in SQL. It works similar to if/else logic in programming languages. CASE can be used inside SELECT, ORDER BY, WHERE, and other SQL expressions. It evaluates a condition and returns a value based on the first condition that matches.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 2 — BASIC CASE SYNTAX
    // -----------------------------------------------------

    {
      id: "case-block-2",
      sub_blocks: [
        {
          id: "case-content-2",
          type: "heading",
          data: {
            text: "Basic CASE Syntax",
          },
        },

        {
          id: "case-content-3",
          type: "code",
          data: {
            language: "sql",
            code: `CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE default_result
END`,
          },
        },

        {
          id: "case-content-4",
          type: "text",
          data: {
            text: `The CASE expression contains one or more WHEN conditions. Each WHEN contains a condition. If the condition is true, SQL returns the value written after THEN. If none of the WHEN conditions match, SQL returns the ELSE value.The ELSE part is optional.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 3 — ASSIGNING GRADES
    // -----------------------------------------------------

    {
      id: "case-block-3",
      sub_blocks: [
        {
          id: "case-content-5",
          type: "heading",
          data: {
            text: "Example: Assigning Grades",
          },
        },

        {
          id: "case-content-6",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name, score,
    CASE
        WHEN score >= 90 THEN 'A'
        WHEN score >= 60 THEN 'B'
        WHEN score >= 40 THEN 'C'
        ELSE 'F'
    END AS grade
FROM students;`,
          },
        },

        {
          id: "case-content-7",
          type: "text",
          data: {
            text: `Here, SQL checks the conditions from top to bottom.
For example, if score is 95: score >= 90 → TRUE
So SQL returns 'A' and does not check the remaining WHEN conditions.
The first matching WHEN condition wins, and the value 'A' returns.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 4 — ORDER OF CONDITIONS
    // -----------------------------------------------------

    {
      id: "case-block-4",
      sub_blocks: [
        {
          id: "case-content-8",
          type: "heading",
          data: {
            text: "Order of Conditions Matters",
          },
        },

        {
          id: "case-content-9",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT score,
    CASE
        WHEN score >= 60 THEN 'Pass'
        WHEN score >= 90 THEN 'Excellent'
        ELSE 'Fail'
    END AS result
FROM students;`,
          },
        },

        {
          id: "case-content-10",
          type: "text",
          data: {
            text: `The order above is incorrect for this requirement. A score of 95 satisfies score >= 60 first, so SQL returns 'Pass'. The condition score >= 90 is never reached for that row. Therefore, more specific or higher-priority conditions should generally be placed before broader conditions.`,
          },
        },

        {
          id: "case-content-13",
          type: "text",
          data: {
            text: `ELSE defines what should happen when none of the WHEN conditions are true. If score is 30, no condition matches, so the result is Fail.`,
          },
        },

        {
          id: "case-content-16",
          type: "text",
          data: {
            text: `The END keyword closes the CASE expression. AS result gives the resulting column a name. So the output contains a column named result. A CASE expression should always be closed with END.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 7 — MULTIPLE CONDITIONS
    // -----------------------------------------------------

    {
      id: "case-block-7",
      sub_blocks: [
        {
          id: "case-content-17",
          type: "heading",
          data: {
            text: "CASE with Multiple Conditions",
          },
        },

        {
          id: "case-content-18",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name, age,
    CASE 
        WHEN age < 13 THEN 'Child' -- age 10 → Child
        WHEN age < 20 THEN 'Teenager' -- age 17 → Teenager
        WHEN age < 60 THEN 'Adult' -- age 30 → Adult
        ELSE 'Senior' -- age 70 → Senior
    END AS age_group
FROM users;`,
          },
        },

        {
          id: "case-content-19",
          type: "text",
          data: {
            text: `CASE is useful when you want to convert raw data into meaningful categories. The conditions are evaluated from top to bottom.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 9 — QUIZ
    // -----------------------------------------------------

    {
      id: "case-block-9",
      type: "quiz",
      sub_blocks: [
        {
          id: "case-quiz-1",
          type: "quiz",
          data: [
            {
              question:
                "Which SQL expression is used to apply conditional logic?",
              type: "text",
              options: ["CASE WHEN", "IF ELSE", "WHEN CASE", "CONDITION"],
              answer: 0,
            },

            {
              question: "What will this query return when marks = 75?",
              type: "code",
              data: {
                code: `SELECT
    CASE
        WHEN marks >= 80 THEN 'A'
        WHEN marks >= 60 THEN 'B'
        ELSE 'C'
    END;`,
                language: "sql",
              },
              options: ["A", "B", "C", "NULL"],
              answer: 1,
            },
          ],
        },
      ],
    },
  ],

  finalPractice: {
    question:
      "Write a SQL query using CASE to classify students as Pass when marks are 40 or above, otherwise Fail.",
  },

  finalQuiz: {
    data: [
      {
        id: "final-case-q1",
        question: "Which keyword closes a CASE expression in SQL?",
        options: ["END", "STOP", "CLOSE", "FINISH"],
        answer: 0,
      },

      {
        id: "final-case-q2",
        question:
          "If no WHEN condition matches and there is no ELSE clause, what does CASE return?",
        options: ["NULL", "0", "FALSE", "ERROR"],
        answer: 0,
      },
    ],
  },
};

const sec2chapter2 = {
  id: "sql-sec2-chapter-2",
  title: "String Functions",
  order: 2,

  contents: [
    // -----------------------------------------------------
    // BLOCK 1 — INTRODUCTION
    // -----------------------------------------------------

    {
      id: "string-block-1",
      sub_blocks: [
        {
          id: "string-content-1",
          type: "text",
          data: {
            text: `String functions are used to work with text values in SQL. They can be used to change, combine, search, or extract parts of strings.
                      Common string functions include: UPPER(), LOWER(), LENGTH() ,CONCAT(), SUBSTRING()`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 2 — UPPER
    // -----------------------------------------------------

    {
      id: "string-block-2",
      sub_blocks: [
        {
          id: "string-content-3",
          type: "text",
          data: {
            text: `UPPER() converts text into uppercase letters.`,
          },
        },

        {
          id: "string-content-4",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT UPPER('hello world') AS UpperCase;
-- HELLO WORLD`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 3 — LOWER
    // -----------------------------------------------------

    {
      id: "string-block-3",
      sub_blocks: [
        {
          id: "string-content-3",
          type: "text",
          data: {
            text: `LOWER() converts text into lowercase letters.`,
          },
        },

        {
          id: "string-content-7",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT LOWER('HELLO WORLD') AS LowerCase; 
-- hello world`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 4 — LENGTH
    // -----------------------------------------------------

    {
      id: "string-block-4",
      sub_blocks: [
        {
          id: "string-content-11",
          type: "text",
          data: {
            text: `LENGTH() returns the number of characters in a string.`,
          },
        },
        {
          id: "string-content-10",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT LENGTH('SQL') AS String_len;
-- Result = 3`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 5 — CONCAT
    // -----------------------------------------------------

    {
      id: "string-block-5",
      sub_blocks: [
        {
          id: "string-content-14",
          type: "text",
          data: {
            text: `CONCAT() combines multiple strings into one string. The example produces: Hello SQL`,
          },
        },
        {
          id: "string-content-13",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT CONCAT('Hello', ' ', 'SQL');
-- result = Hello SQL`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 6 — SUBSTRING
    // -----------------------------------------------------

    {
      id: "string-block-6",
      sub_blocks: [
        {
          id: "string-content-17",
          type: "text",
          data: {
            text: `SUBSTRING() extracts a portion of a string.

The exact syntax can vary between SQL database systems.

It is commonly used when you need only a specific part of a text value.`,
          },
        },

        {
          id: "string-content-16",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT SUBSTRING('Database', 1, 4);
-- result = Data`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 7 — FUNCTIONS WITH COLUMNS
    // -----------------------------------------------------

    {
      id: "string-block-7",
      sub_blocks: [
        {
          id: "string-content-18",
          type: "heading",
          data: {
            text: "String Functions with Columns",
          },
        },

        {
          id: "string-content-19",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name,
    UPPER(name) AS uppercase_name,
    LENGTH(name) AS name_length
FROM students;`,
          },
        },

        {
          id: "string-content-20",
          type: "text",
          data: {
            text: `String functions are not limited to fixed strings. They can also be applied directly to table columns.

For example, UPPER(name) converts every student's name to uppercase. LENGTH(name) returns the length of each name.`,
          },
        },
      ],
    },
  ],
};

const sec2chapter3 = {
  id: "sql-sec2-chapter-3",
  title: "String Functions with Filtering",
  order: 3,

  contents: [
    // -----------------------------------------------------
    // BLOCK 1 — INTRODUCTION
    // -----------------------------------------------------

    {
      id: "string-filter-block-1",
      sub_blocks: [
        {
          id: "string-filter-1",
          type: "text",
          data: {
            text: `String functions become especially useful when working with real table data. You can use them in SELECT, WHERE, ORDER BY, and other parts of a SQL query. This allows you to transform or compare text values while querying data.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 2 — LOWER WITH WHERE
    // -----------------------------------------------------

    {
      id: "string-filter-block-2",
      sub_blocks: [
        {
          id: "string-filter-2",
          type: "heading",
          data: {
            text: "Using LOWER() with WHERE",
          },
        },

        {
          id: "string-filter-3",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT *
FROM students
WHERE LOWER(name) = 'mahtab';`,
          },
        },

        {
          id: "string-filter-4",
          type: "text",
          data: {
            text: `LOWER() can be useful when you want to compare text without worrying about uppercase or lowercase differences.

For example: MAHTAB, Mahtab mahTAB can all be converted to lowercase before comparison.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 3 — UPPER WITH SELECT
    // -----------------------------------------------------

    {
      id: "string-filter-block-3",
      sub_blocks: [
        {
          id: "string-filter-5",
          type: "heading",
          data: {
            text: "Using UPPER() with SELECT",
          },
        },

        {
          id: "string-filter-6",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name,
    UPPER(name) AS display_name
FROM students;`,
          },
        },

        {
          id: "string-filter-7",
          type: "text",
          data: {
            text: `Here, the original name is not changed in the table.

UPPER(name) only changes the value returned by the query.

The alias display_name gives the calculated column a readable name.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 4 — CONCAT
    // -----------------------------------------------------

    {
      id: "string-filter-block-4",
      sub_blocks: [
        {
          id: "string-filter-8",
          type: "heading",
          data: {
            text: "Combining CONCAT()",
          },
        },

        {
          id: "string-filter-9",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT
    CONCAT(first_name, ' ', last_name) AS full_name
FROM students;`,
          },
        },

        {
          id: "string-filter-10",
          type: "text",
          data: {
            text: `CONCAT() can combine multiple columns.

For example: first_name = 'John' and last_name = 'Doe'

CONCAT(first_name, ' ', last_name) ---- produces: John Doe`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 5 — LENGTH WITH WHERE
    // -----------------------------------------------------

    {
      id: "string-filter-block-5",
      sub_blocks: [
        {
          id: "string-filter-11",
          type: "heading",
          data: {
            text: "Using LENGTH() for Filtering",
          },
        },

        {
          id: "string-filter-12",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name
FROM students
WHERE LENGTH(name) > 5;`,
          },
        },

        {
          id: "string-filter-13",
          type: "text",
          data: {
            text: `Here LENGTH(name) is calculated for each row.

Only rows where the name contains more than 5 characters satisfy the WHERE condition.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 6 — NESTED STRING FUNCTIONS
    // -----------------------------------------------------

    {
      id: "string-filter-block-6",
      sub_blocks: [
        {
          id: "string-filter-14",
          type: "heading",
          data: {
            text: "Combining String Functions",
          },
        },

        {
          id: "string-filter-15",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT
    UPPER(CONCAT(first_name, ' ', last_name)) AS full_name
FROM students;`,
          },
        },

        {
          id: "string-filter-16",
          type: "text",
          data: {
            text: `SQL functions can be nested.

In this example:

1. CONCAT() creates the full name.
2. UPPER() converts the complete name to uppercase.

So: John Doe becomes: JOHN DOE`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 7 — IMPORTANT POINTS
    // -----------------------------------------------------

    {
      id: "string-filter-block-7",
      sub_blocks: [
        {
          id: "string-filter-17",
          type: "heading",
          data: {
            text: "Important Points",
          },
        },

        {
          id: "string-filter-18",
          type: "text",
          data: {
            text: `String functions can be combined together.

For example: UPPER(CONCAT(first_name, ' ', last_name))
The inner function runs first. The result is then passed to the outer function.
This technique is useful for creating formatted output from table data.`,
          },
        },
      ],
    },
  ],
};

const sec2chapter4 = {
  id: "sql-sec2-chapter-4",
  title: "Conditional Aggregation",
  order: 4,

  contents: [
    {
      id: "cond-aggregation-block-1",
      sub_blocks: [
        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "You can use a CASE expression inside  an aggregate mathod. The magic is that COUNT ignores NULL, therefore a CASE with no ELSE only counts rows that match the condition, see the given example.",
          },
        },
        {
          id: "code-agg-content-2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT COUNT(*) AS Total,
       COUNT(CASE WHEN status = 'compleated' THEN 1 END) AS compleated_count
FROM table1`,
          },
        },
      ],
    },

    {
      id: "cond-agg-block-2",
      sub_blocks: [
        {
          id: "cond-agg-block2-sub2",
          type: "text",
          data: {
            text: `Now compleated_count is the number of 'compleated' rows, even though we did'nt filter the whole query. This is The Trick behind every multi-metric dashboard query you'll ever write.`,
          },
        },
      ],
    },

    {
      id: "quiz-block-c4b3",
      type: "quiz",
      sub_blocks: [
        {
          id: "c4b3-quiz-1",
          type: "quiz",
          data: [
            {
              question: "Count only the rows where status is 'pending'.",
              type: "code",
              data: {
                code: `SELECT
    COUNT(___ WHEN status = 'pending' ___ 1 END) AS pending_count
    FROM orderes   `,
                language: "sql",
              },
              options: [
                "WHERE & THEN",
                "CASE & THEN",
                "IF & RETURN",
                "THEN & CASE",
              ],
              answer: 1,
            },

            {
              question: "What Dose the value 1 represent in",
              type: "code",
              data: {
                code: `CASE WHEN status = 'pending' THEN 1 END) AS pending_count`,
                language: "sql",
              },
              options: [
                "A boolean true Indicator",
                "The weight assigned to each matching row.",
                "The number of rows should be return.",
                "Any non-NULL value that COUNT will inclued",
              ],
              answer: 3,
            },

            {
              question:
                "A CASE expression without an else clause returns NULL when no conditions match",
              options: ["TRUE", "FALSE"],
              answer: 0,
            },

            {
              question:
                "Why does COUNT with a CASE expression (no ELSE) only count matching rows.",
              type: "text",
              options: [
                "COUNT treats 0 as non-countable value",
                "The CASE expression removes non-matching rows from the result set.",
                "COUNT autometically filters rows base on the case conditon.",
                "COUNT ignores NULL values and unmatched rows return NULL",
              ],
              answer: 3,
            },

            {
              question:
                "What is the main advantages of using CASE inside COUNT ?",
              type: "text",
              options: [
                "It autometically groups the result by the CASE condition.",
                "It makes the query run Faster then using WHERE clause",
                "Calculates multiple metrics from diffrent conditions in a single query.",
                "It filters out rows before the aggregation happens",
              ],
              answer: 2,
            },
          ],
        },
      ],
    },

    {
      id: "quiz-block-c4b4",
      type: "text",
      sub_blocks: [
        {
          id: "cond-agg-block4-sub1",
          type: "text",
          data: {
            text: `The same idea works with SUM: and it is even more flexible. The CASE can return 1 for matching rows and 0 for everythong else, or it can return any numeric value to weight rows differently.`,
          },
        },

        {
          id: "cond-agg-block4-sub2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT COUNT(CASE WHEN payment = 'done' THEN 1 ELSE 0 END) as successful_payment_count
-- Both will give same result
SELECT SUM(CASE WHEN payment = 'done' THEN 1 ELSE 0 END) as successful_payment_count`,
          },
        },

        {
          id: "cond-agg-block4-sub3",
          type: "text",
          data: {
            text: `Both COUNT and SUM will give the same result, As weight is taken 0 and 1 in SUM
            `,
          },
        },
      ],
    },

    {
      id: "quiz-block-c4b5",
      type: "quiz",
      sub_blocks: [
        {
          id: "c4b5-quiz-1",
          type: "quiz",
          data: [
            {
              question: "Will Both produce same results for matching rows ?",
              type: "code",
              data: {
                code: `SUM(CASE WHEN condition THEN 1 ELSE 0 END)
------- &
COUNT(CASE WHEN condition THEN 1 ELSE 0 END) `,
                language: "sql",
              },
              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "What Dose this query return ?",
              type: "code",
              data: {
                code: `SELECT COUNT(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS column_name
FROM orders`,
                language: "sql",
              },
              options: [
                "A boolean true Indicator",
                "The weight assigned to each matching row.",
                "Count of all pending order",
                "SUM of all orders payment",
              ],
              answer: 2,
            },

            {
              question: "Which is Correct ?",
              type: "code",
              data: {
                code: `COUNT(CASE WHEN grade = 'pass' THEN 1 END)`,
                language: "sql",
              },
              options: [
                "CASE return 0 if no ELSE statement",
                "COUNT ignores NULL values automatically",
                "The ELSE clause is invalid with COUNT",
                "Wrong use of Aggregation methods.",
              ],
              answer: 1,
            },

            {
              question:
                "Why SUM with CASE is more flexible than COUNT with CASE",
              type: "text",
              options: [
                "SUM can return weighted values, not just counts",
                "SUM works with more data types",
                "SUM handles NULL values better",
                "SUM run faster on large tables",
              ],
              answer: 0,
            },
          ],
        },
      ],
    },

    {
      id: "block-c4b6",
      type: "text",
      sub_blocks: [
        {
          id: "cond-agg-block6-sub1",
          type: "text",
          data: {
            text: `Combine conditional aggregation with GROUP BY to turn rows into columns. it's the SQL version of a spreadsheet pivot.`,
          },
        },
      ],
    },

    {
      id: "block-c4b7",
      type: "text",
      sub_blocks: [
        {
          id: "cag-b7-s1",
          type: "text",
          data: {
            text: `Suppose sales has rows like (month, product, units). To see one row per month with one column per product.`,
          },
        },

        {
          id: "cag-b7-s2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT month,
       SUM(CASE WHEN product = 'a' THEN units ELSE 0 END) as product_a,
       SUM(CASE WHEN product = 'b' THEN units ELSE 0 END) as product_b
FROM sales GROUB by month`,
          },
        },
      ],
    },

    {
      id: "block-c4b8",
      type: "text",
      sub_blocks: [
        {
          id: "cag-b8-s1",
          type: "text",
          data: {
            text: `The GROUP BY bucket each SUM(CASE.....) sees is the rows for one month; the CASE picks the slice for one product.`,
          },
        },
      ],
    },
  ],
};

const sec2chapter5 = {
  id: "sql-sec2-chapter-5",
  title: "SET OPEARTIONS",
  order: 4,

  contents: [
    {
      id: "cond-aggregation-block-1",
      sub_blocks: [
        {
          id: "cond-agg-content-1",
          type: "heading",
          data: {
            text: "UNION vs UNION ALL",
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "You met UNION in Fundamentals: it stacks two result sets on top of each other. By default it also removes duplicates, which costs an extra sort.",
          },
        },

        {
          id: "code-agg-content-2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name FROM authors
UNION
SELECT name FROM editors`,
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "UNION ALL does the same stacking but keeps duplicates. It's faster and almost always what you want when you know the two sides can't produce the same row, or when you actually want to count each occurrence",
          },
        },

        {
          id: "code-agg-content-2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT name FROM authors
UNION ALL
SELECT name FROM editors`,
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "Both sides must return the same number of columns, in the same order, with compatible types.",
          },
        },
      ],
    },

    {
      id: "cond-aggregation-block-1",
      sub_blocks: [
        {
          id: "cond-agg-content-1",
          type: "heading",
          data: {
            text: "INTERSECT",
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "INTERSECT returns only rows that appear in both result sets. Like UNION, it removes duplicates and requires matching columns on each side.",
          },
        },

        {
          id: "code-agg-content-2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT email FROM newsletter_subs
INTERSECT
SELECT email FROM premium_users`,
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "That's every email that's both subscribed to the newsletter and a premium user, without writing a join.",
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "Why bother, when a JOIN can do this too? INTERSECT is shorter when both sides are simple SELECTs and you're matching on the entire row, not just an id.",
          },
        },
      ],
    },

    {
      id: "cond-aggregation-block-1",
      sub_blocks: [
        {
          id: "cond-agg-content-1",
          type: "heading",
          data: {
            text: "EXCEPT",
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "EXCEPT returns rows that appear in the first result set but not in the second. Think of it as set subtraction.",
          },
        },

        {
          id: "code-agg-content-2",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT email FROM newsletter_subs
EXCEPT
SELECT email FROM premium_users`,
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "Every newsletter subscriber who isn't a premium user. This is useful for finding missing rows: who's signed up but hasn't paid? Which products were ordered last month but not this month?",
          },
        },

        {
          id: "cond-agg-content-1",
          type: "text",
          data: {
            text: "Like UNION and INTERSECT, it removes duplicates and expects matching columns on both sides.",
          },
        },
      ],
    },
  ],
};

const sec2chapters = [
  sec2chapter1,
  sec2chapter2,
  sec2chapter3,
  sec2chapter4,
  sec2chapter5,
];

const sections2 = [
  {
    id: "sql-section-2",
    title: "SQL Beyond the Basic",
    order: 2,
    chapters: [...sec2chapters],
  },
];

const sections = [...sections1, ...sections2];

const courses1 = {
  id: "SQL",
  title: "SQL",
  description: "Learn SQL from Basic to Advanced",
  sections: [...sections],
};

const courses = [courses1];

export default courses;
/*
courses
│
├── course1
│   │
│   ├── sections
│   │   │
│   │   ├── section1
│   │   │   │
│   │   │   ├── chapters
│   │   │   │   │
│   │   │   │   ├── chapter1
│   │   │   │   │   ├── content1
│   │   │   │   │   ├── content2
│   │   │   │   │   └── content3
│   │   │   │   │
│   │   │   │   ├── chapter2
│   │   │   │   │   ├── content1
│   │   │   │   │   └── content2
│   │   │   │   │
│   │   │   │   └── ...
│   │   │   │
│   │   │   └── section2
│   │   │
│   │   └── ...
│   │
│   └── ...
│
└── course2

COURSE
│
├── SECTION
│   │
│   ├── CHAPTER
│   │   │
│   │   ├── CONTENT
│   │   ├── CONTENT
│   │   └── CONTENT
│   │
│   ├── CHAPTER
│   │   ├── CONTENT
│   │   └── CONTENT
│   │
│   └── ...
│
└── SECTION
*/
