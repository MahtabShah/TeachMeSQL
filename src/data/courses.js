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
            text: `Databases are like large buckets that store data in an organized manner. Here are two examples of when we would like to create a database: A database for a university to save data about students, courses, and lecturers.
A database for a car agency to track sales, car storage, and employees.
And many more. Inside a database there are tables, and each table has a name, column names, and rows.`,
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
          type: "code",
          data: {
            language: "sql",
            code: `firstname	lastname	age	exp_years	gender ---
1	Ghully	Thuas	29	2.3	Female ---
2	Bostal	Shkolky	32	0.2	Male ---
3	Qaostu	Malop	21	4	Female`,
          },
        },

        {
          id: "isb-3",
          type: "text",
          data: {
            text: `The workers table has 5 data columns (firstname, lastname, age, exp_years, gender) and 3 rows. The first column (showing 1, 2, 3) is just a row number, not a data column.

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
      ],
    },
  ],
};

const sec1chapter2 = {
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
          type: "code",
          data: {
            language: "sql",
            code: `
            course_id  | lecture_id
                1      |    2
                4      |    5
            ------------------- lecturs----------------
            lecture_id | name
                2      |  Mahtab Shah
                3      |  Shole
                5      |  Nunnu
            `,
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
            For example: for courses, we will check for lecutre_id = 2 to all lecture_id in lectures table. In lecures table only first row will match. as first row has lecture_id = 2.

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
          id: "s1c2b4sb2",
          type: "code",
          data: {
            language: "sql",
            code: `
            course_id  | lecture_id |  name       |            
                1      |    2       | Mahtab Shah |
                4      |    5       | Nunnu       |
            `,
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
            code: `SELECT courses.course_id, lecturers.name, AS lecturer_name
            FROM courses, lectures
            WHERE courses.lecturer_id == lecturers.lecturer_id
            `,
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
            code: `SELECT courses.course_id, lecturers.name, AS lecturer_name
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
            code: `SELECT courses.course_id, lecturers.name, AS lecturer_name
            FROM courses
            JOIN lecturers ON courses.lecturer_id == lecturers.lecturer_id
            `,
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
              type: "code",
              data: {
                language: "sql",
                code: `Using WHERE with multiple tables in FROM, or useinf JOIN....ON`,
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
            language: "slq",
            code: `SELECT table1.col1, table2.col2 .......
            FROM table1, (SELECT * FROM tableA) as table2
            WHERE table1.id = table2.id
            `,
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
  ],
};

const sec1chapters = [sec1chapter1, sec1chapter2];

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
            code: `SELECT
    name,
    score,
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
For example, if score = 95: score >= 90 → TRUE
So SQL returns 'A' and does not check the remaining WHEN conditions.
The first matching WHEN condition wins.`,
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
            code: `SELECT
    score,
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
      ],
    },

    // -----------------------------------------------------
    // BLOCK 5 — ELSE
    // -----------------------------------------------------

    {
      id: "case-block-5",
      sub_blocks: [
        {
          id: "case-content-11",
          type: "heading",
          data: {
            text: "CASE with ELSE",
          },
        },

        {
          id: "case-content-12",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT
    name,
    CASE
        WHEN score >= 40 THEN 'Pass'
        ELSE 'Fail'
    END AS result
FROM students;`,
          },
        },

        {
          id: "case-content-13",
          type: "text",
          data: {
            text: `ELSE defines what should happen when none of the WHEN conditions are true. If score is 30, no condition matches, so the result is NULL.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 6 — END AND AS
    // -----------------------------------------------------

    {
      id: "case-block-6",
      sub_blocks: [
        {
          id: "case-content-14",
          type: "heading",
          data: {
            text: "Naming the Result with AS",
          },
        },

        {
          id: "case-content-15",
          type: "code",
          data: {
            language: "sql",
            code: `SELECT
    name,
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
          id: "case-content-16",
          type: "text",
          data: {
            text: `The END keyword closes the CASE expression. AS grade gives the resulting column a name. So the output contains a column named grade. A CASE expression should always be closed with END.`,
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
            code: `SELECT
    name,
    age,
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
            text: `LENGTH() returns the number of characters in a string.

For example: 'SQL' contains 3 characters.  Therefore: LENGTH('SQL') → 3`,
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
            text: `CONCAT() combines multiple strings into one string.

The example produces: Hello SQL`,
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
            code: `SELECT
    name,
    UPPER(name) AS uppercase_name,
    LENGTH(name) AS name_length
FROM students;`,
          },
        },

        {
          id: "string-content-20",
          type: "text",
          data: {
            text: `String functions are not limited to fixed strings.

They can also be applied directly to table columns.

For example, UPPER(name) converts every student's name to uppercase.

LENGTH(name) returns the length of each name.`,
          },
        },
      ],
    },

    // -----------------------------------------------------
    // BLOCK 8 — IMPORTANT POINTS
    // -----------------------------------------------------

    {
      id: "string-block-8",
      sub_blocks: [
        {
          id: "string-content-21",
          type: "heading",
          data: {
            text: "Important Points",
          },
        },

        {
          id: "string-content-22",
          type: "text",
          data: {
            text: `
UPPER() → converts to uppercase
LOWER() → converts to lowercase
LENGTH() → returns string length
CONCAT() → combines strings
SUBSTRING() → extracts part of a string

String functions are commonly used in SELECT queries.`,
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
            text: `String functions become especially useful when working with real table data.

You can use them in SELECT, WHERE, ORDER BY, and other parts of a SQL query.

This allows you to transform or compare text values while querying data.`,
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

For example: MAHTAB, Mahtab mahtab

can all be converted to lowercase before comparison.`,
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
            code: `SELECT
    name,
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

For example:
first_name = 'John'
last_name = 'Doe'

CONCAT(first_name, ' ', last_name)

produces: John Doe`,
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
            code: `SELECT COUNT(*) AS Total, COUNT(CASE WHEN status = 'compleated' THEN 1 END) AS compleated_count`,
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
            ------------------------ Both will give same result ------------------------
            SELECT SUM(CASE WHEN payment = 'done' THEN 1 ELSE 0 END) as successful_payment_count
            `,
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
                --------------- and -----------

                COUNT(CASE WHEN condition THEN 1 ELSE 0 END)
                `,
                language: "sql",
              },
              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "What Dose this query return ?",
              type: "code",
              data: {
                code: `SELECT COUNT(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS column_name FROM orders`,
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
                "Why SUM with CASEis more flexible than COUNT with CASE",
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
            text: `Suppose sales has rows like (mount, product, units). To see one row per month with one column per product.`,
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
            FROM sales GROUB by month
            `,
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
                --------------- and -----------

                COUNT(CASE WHEN condition THEN 1 ELSE 0 END)
                `,
                language: "sql",
              },
              options: ["True", "False"],
              answer: 0,
            },

            {
              question: "What Dose this query return ?",
              type: "code",
              data: {
                code: `SELECT COUNT(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS column_name FROM orders`,
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
                "Why SUM with CASEis more flexible than COUNT with CASE",
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
  ],
};

const sec2chapters = [sec2chapter1, sec2chapter2, sec2chapter3, sec2chapter4];

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
