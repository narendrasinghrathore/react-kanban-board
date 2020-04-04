
# Kanban Board Application


## Description
This is kanban board application created using [react.js](https://reactjs.org/) framework.


### Implementations
This section covers implementation details of each component and best practices.

1. **Dashboard Component**
This is our main component, which loads up initially when application loads apart from app component that is container of our application.



## Test-driven development cycle[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=1 "Edit section: Test-driven development cycle")]

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TDD_Global_Lifecycle.png/220px-TDD_Global_Lifecycle.png)](https://en.wikipedia.org/wiki/File:TDD_Global_Lifecycle.png)

A graphical representation of the test-driven development lifecycle

The following sequence is based on the book  _Test-Driven Development by Example_:[[2]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Beck-2)

1. Add a test

In test-driven development, each new feature begins with writing a test. Write a test that defines a function or improvements of a function, which should be very succinct. To write a test, the developer must clearly understand the feature's specification and requirements. The developer can accomplish this through  [use cases](https://en.wikipedia.org/wiki/Use_case "Use case")  and  [user stories](https://en.wikipedia.org/wiki/User_story "User story")  to cover the requirements and exception conditions, and can write the test in whatever testing framework is appropriate to the software environment. It could be a modified version of an existing test. This is a differentiating feature of test-driven development versus writing unit tests  _after_  the  [code](https://en.wikipedia.org/wiki/Source_code "Source code")  is written: it makes the developer focus on the requirements  _before_  writing the code, a subtle but important difference.

2. Run all tests and see if the new test fails

This validates that the  [test harness](https://en.wikipedia.org/wiki/Test_harness "Test harness")  is working correctly, shows that the new test does not pass without requiring new code because the required behavior already exists, and it rules out the possibility that the new test is flawed and will always pass. The new test should fail for the expected reason. This step increases the developer's confidence in the new test.

3. Write the code

The next step is to write some code that causes the test to pass. The new code written at this stage is not perfect and may, for example, pass the test in an inelegant way. That is acceptable because it will be improved and honed in Step 5.

At this point, the only purpose of the written code is to pass the test. The programmer must not write code that is beyond the functionality that the test checks.

4. Run tests

If all test cases now pass, the programmer can be confident that the new code meets the test requirements, and does not break or degrade any existing features. If they do not, the new code must be adjusted until they do.

5. Refactor code

The growing code base must be  [cleaned up](https://en.wikipedia.org/wiki/Code_refactoring "Code refactoring")  regularly during test-driven development. New code can be moved from where it was convenient for passing a test to where it more logically belongs.  [Duplication](https://en.wikipedia.org/wiki/Duplicate_code "Duplicate code")  must be removed.  [Object](https://en.wikipedia.org/wiki/Object_(computer_science) "Object (computer science)"),  [class](https://en.wikipedia.org/wiki/Class_(computer_programming) "Class (computer programming)"),  [module](https://en.wikipedia.org/wiki/Modular_programming "Modular programming"),  [variable](https://en.wikipedia.org/wiki/Variable_(computer_science) "Variable (computer science)")  and  [method](https://en.wikipedia.org/wiki/Method_(computer_programming) "Method (computer programming)")  names should clearly represent their current purpose and use, as extra functionality is added. As features are added, method bodies can get longer and other objects larger. They benefit from being split and their parts carefully named to improve  [readability](https://en.wikipedia.org/wiki/Computer_programming#Readability_of_source_code "Computer programming")  and  [maintainability](https://en.wikipedia.org/wiki/Software_maintenance "Software maintenance"), which will be increasingly valuable later in the  [software lifecycle](https://en.wikipedia.org/wiki/Software_lifecycle "Software lifecycle").  [Inheritance hierarchies](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming) "Inheritance (object-oriented programming)")  may be rearranged to be more logical and helpful, and perhaps to benefit from recognized  [design patterns](https://en.wikipedia.org/wiki/Software_design_pattern "Software design pattern"). There are specific and general guidelines for refactoring and for creating clean code.[[6]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-6)[[7]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-7)  By continually re-running the test cases throughout each refactoring phase, the developer can be confident that process is not altering any existing functionality.

The concept of removing duplication is an important aspect of any software design. In this case, however, it also applies to the removal of any duplication between the test code and the production code—for example  [magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming) "Magic number (programming)")  or strings repeated in both to make the test pass in Step 3.

Repeat

Starting with another new test, the cycle is then repeated to push forward the functionality. The size of the steps should always be small, with as few as 1 to 10 edits between each test run. If new code does not rapidly satisfy a new test, or other tests fail unexpectedly, the programmer should  [undo](https://en.wikipedia.org/wiki/Undo "Undo")  or revert in preference to excessive  [debugging](https://en.wikipedia.org/wiki/Debugging "Debugging").  [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration "Continuous integration")  helps by providing revertible checkpoints. When using external libraries it is important not to make increments that are so small as to be effectively merely testing the library itself,[[4]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Newkirk-4)  unless there is some reason to believe that the library is buggy or is not sufficiently feature-complete to serve all the needs of the software under development.
## Development style[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=2 "Edit section: Development style")]

There are various aspects to using test-driven development, for example the principles of "keep it simple, stupid" ([KISS](https://en.wikipedia.org/wiki/KISS_principle "KISS principle")) and "[You aren't gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it "You aren't gonna need it")" (YAGNI). By focusing on writing only the code necessary to pass tests, designs can often be cleaner and clearer than is achieved by other methods.[[2]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Beck-2)  In  _Test-Driven Development by Example_, Kent Beck also suggests the principle "[Fake it till you make it](https://en.wikipedia.org/wiki/Fake_it_till_you_make_it "Fake it till you make it")".

To achieve some advanced design concept such as a  [design pattern](https://en.wikipedia.org/wiki/Design_pattern "Design pattern"), tests are written that generate that design. The code may remain simpler than the target pattern, but still pass all required tests. This can be unsettling at first but it allows the developer to focus only on what is important.

Writing the tests first: The tests should be written before the functionality that is to be tested. This has been claimed to have many benefits. It helps ensure that the application is written for testability, as the developers must consider how to test the application from the outset rather than adding it later. It also ensures that tests for every feature get written. Additionally, writing the tests first leads to a deeper and earlier understanding of the product requirements, ensures the effectiveness of the test code, and maintains a continual focus on  [software quality](https://en.wikipedia.org/wiki/Software_quality "Software quality").[[8]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Pathfinder_Solutions-8)  When writing feature-first code, there is a tendency by developers and organisations to push the developer on to the next feature, even neglecting testing entirely. The first TDD test might not even compile at first, because the classes and methods it requires may not yet exist. Nevertheless, that first test functions as the beginning of an executable specification.[[9]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-9)

Each test case fails initially: This ensures that the test really works and can catch an error. Once this is shown, the underlying functionality can be implemented. This has led to the "test-driven development mantra", which is "red/green/refactor", where red means  _fail_  and green means  _pass_. Test-driven development constantly repeats the steps of adding test cases that fail, passing them, and refactoring. Receiving the expected test results at each stage reinforces the developer's mental model of the code, boosts confidence and increases productivity.

### Keep the unit small[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=3 "Edit section: Keep the unit small")]

For TDD, a unit is most commonly defined as a class, or a group of related functions often called a module. Keeping units relatively small is claimed to provide critical benefits, including:

-   Reduced debugging effort – When test failures are detected, having smaller units aids in tracking down errors.
-   Self-documenting tests – Small test cases are easier to read and to understand.[[8]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Pathfinder_Solutions-8)

Advanced practices of test-driven development can lead to  [acceptance test–driven development](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development "Acceptance test–driven development")  (ATDD) and  [Specification by example](https://en.wikipedia.org/wiki/Specification_by_example "Specification by example")  where the criteria specified by the customer are automated into acceptance tests, which then drive the traditional unit test-driven development (UTDD) process.[[10]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Koskela-10)  This process ensures the customer has an automated mechanism to decide whether the software meets their requirements. With ATDD, the development team now has a specific target to satisfy – the acceptance tests – which keeps them continuously focused on what the customer really wants from each user story.

## Best practices[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=4 "Edit section: Best practices")]

### Test structure[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=5 "Edit section: Test structure")]

Effective layout of a test case ensures all required actions are completed, improves the readability of the test case, and smooths the flow of execution. Consistent structure helps in building a self-documenting test case. A commonly applied structure for test cases has (1) setup, (2) execution, (3) validation, and (4) cleanup.

-   Setup: Put the Unit Under Test (UUT) or the overall test system in the state needed to run the test.
-   Execution: Trigger/drive the UUT to perform the target behavior and capture all output, such as return values and output parameters. This step is usually very simple.
-   Validation: Ensure the results of the test are correct. These results may include explicit outputs captured during execution or state changes in the UUT.
-   Cleanup: Restore the UUT or the overall test system to the pre-test state. This restoration permits another test to execute immediately after this one.[[8]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Pathfinder_Solutions-8)

### Individual best practices[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=6 "Edit section: Individual best practices")]

Some best practices that an individual could follow would be to separate common set-up and tear-down logic into test support services utilized by the appropriate test cases, to keep each  [test oracle](https://en.wikipedia.org/wiki/Test_oracle "Test oracle")  focused on only the results necessary to validate its test, and to design time-related tests to allow tolerance for execution in non-real time operating systems. The common practice of allowing a 5-10 percent margin for late execution reduces the potential number of false negatives in test execution. It is also suggested to treat test code with the same respect as production code. Test code must work correctly for both positive and negative cases, last a long time, and be readable and maintainable. Teams can get together with and review tests and test practices to share effective techniques and catch bad habits.[[11]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-pathfindersolns.com-11)

### Practices to avoid, or "anti-patterns"[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=7 "Edit section: Practices to avoid, or "anti-patterns"")]

-   Having test cases depend on system state manipulated from previously executed test cases (i.e., you should always start a unit test from a known and pre-configured state).
-   Dependencies between test cases. A test suite where test cases are dependent upon each other is brittle and complex. Execution order should not be presumed. Basic refactoring of the initial test cases or structure of the UUT causes a spiral of increasingly pervasive impacts in associated tests.
-   Interdependent tests. Interdependent tests can cause cascading false negatives. A failure in an early test case breaks a later test case even if no actual fault exists in the UUT, increasing defect analysis and debug efforts.
-   Testing precise execution behavior timing or performance.
-   Building "all-knowing oracles". An oracle that inspects more than necessary is more expensive and brittle over time. This very common error is dangerous because it causes a subtle but pervasive time sink across the complex project.[[11]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-pathfindersolns.com-11)
-   Testing implementation details.
-   Slow running tests.

## Benefits[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=8 "Edit section: Benefits")]

A 2005 study found that using TDD meant writing more tests and, in turn, programmers who wrote more tests tended to be more productive.[[12]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-12)  Hypotheses relating to code quality and a more direct correlation between TDD and productivity were inconclusive.[[13]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-13)

Programmers using pure TDD on new ("[greenfield](https://en.wikipedia.org/wiki/Greenfield_project "Greenfield project")") projects reported they only rarely felt the need to invoke a  [debugger](https://en.wikipedia.org/wiki/Debugger "Debugger"). Used in conjunction with a  [version control system](https://en.wikipedia.org/wiki/Version_control_system "Version control system"), when tests fail unexpectedly, reverting the code to the last version that passed all tests may often be more productive than debugging.[[14]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-14)

Test-driven development offers more than just simple validation of correctness, but can also drive the design of a program.[[15]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-15)  By focusing on the test cases first, one must imagine how the functionality is used by clients (in the first case, the test cases). So, the programmer is concerned with the interface before the implementation. This benefit is complementary to  [design by contract](https://en.wikipedia.org/wiki/Design_by_contract "Design by contract")  as it approaches code through test cases rather than through mathematical assertions or preconceptions.

Test-driven development offers the ability to take small steps when required. It allows a programmer to focus on the task at hand as the first goal is to make the test pass. Exceptional cases and error handling are not considered initially, and tests to create these extraneous circumstances are implemented separately. Test-driven development ensures in this way that all written code is covered by at least one test. This gives the programming team, and subsequent users, a greater level of confidence in the code.

While it is true that more code is required with TDD than without TDD because of the unit test code, the total code implementation time could be shorter based on a model by Müller and Padberg.[[16]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-16)  Large numbers of tests help to limit the number of defects in the code. The early and frequent nature of the testing helps to catch defects early in the development cycle, preventing them from becoming endemic and expensive problems. Eliminating defects early in the process usually avoids lengthy and tedious debugging later in the project.

TDD can lead to more modularized, flexible, and extensible code. This effect often comes about because the methodology requires that the developers think of the software in terms of small units that can be written and tested independently and integrated together later. This leads to smaller, more focused classes, looser  [coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming) "Coupling (computer programming)"), and cleaner interfaces. The use of the  [mock object](https://en.wikipedia.org/wiki/Mock_object "Mock object")  design pattern also contributes to the overall modularization of the code because this pattern requires that the code be written so that modules can be switched easily between mock versions for unit testing and "real" versions for deployment.

Because no more code is written than necessary to pass a failing test case, automated tests tend to cover every code path. For example, for a TDD developer to add an  `else`  branch to an existing  `if`  statement, the developer would first have to write a failing test case that motivates the branch. As a result, the automated tests resulting from TDD tend to be very thorough: they detect any unexpected changes in the code's behaviour. This detects problems that can arise where a change later in the development cycle unexpectedly alters other functionality.

Madeyski[[17]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Madeyski-17)  provided empirical evidence (via a series of laboratory experiments with over 200 developers) regarding the superiority of the TDD practice over the traditional Test-Last approach or testing for correctness approach, with respect to the lower coupling between objects (CBO). The mean effect size represents a medium (but close to large) effect on the basis of meta-analysis of the performed experiments which is a substantial finding. It suggests a better modularization (i.e., a more modular design), easier reuse and testing of the developed software products due to the TDD programming practice.[[17]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Madeyski-17)  Madeyski also measured the effect of the TDD practice on unit tests using branch coverage (BC) and mutation score indicator (MSI),[[18]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-18)[[19]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-19)[[20]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-20)  which are indicators of the thoroughness and the fault detection effectiveness of unit tests, respectively. The effect size of TDD on branch coverage was medium in size and therefore is considered substantive effect.

## Limitations[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=9 "Edit section: Limitations")]

[![](https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/50px-Question_book-new.svg.png)](https://en.wikipedia.org/wiki/File:Question_book-new.svg)

This section  **needs additional citations for  [verification](https://en.wikipedia.org/wiki/Wikipedia:Verifiability "Wikipedia:Verifiability")**. Please help  [improve this article](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit)  by  [adding citations to reliable sources](https://en.wikipedia.org/wiki/Help:Introduction_to_referencing_with_Wiki_Markup/1 "Help:Introduction to referencing with Wiki Markup/1"). Unsourced material may be challenged and removed.  
_Find sources:_ ["Test-driven development"](https://www.google.com/search?as_eq=wikipedia&q=%22Test-driven+development%22) – [news](https://www.google.com/search?tbm=nws&q=%22Test-driven+development%22+-wikipedia) **·**  [newspapers](https://www.google.com/search?&q=%22Test-driven+development%22+site:news.google.com/newspapers&source=newspapers) **·**  [books](https://www.google.com/search?tbs=bks:1&q=%22Test-driven+development%22+-wikipedia) **·**  [scholar](https://scholar.google.com/scholar?q=%22Test-driven+development%22) **·**  [JSTOR](https://www.jstor.org/action/doBasicSearch?Query=%22Test-driven+development%22&acc=on&wc=on)  _(August 2013)_ _([Learn how and when to remove this template message](https://en.wikipedia.org/wiki/Help:Maintenance_template_removal "Help:Maintenance template removal"))_

Test-driven development does not perform sufficient testing in situations where full functional tests are required to determine success or failure, due to extensive use of unit tests.[[21]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-21)  Examples of these are  [user interfaces](https://en.wikipedia.org/wiki/User_interface "User interface"), programs that work with  [databases](https://en.wikipedia.org/wiki/Database "Database"), and some that depend on specific  [network](https://en.wikipedia.org/wiki/Computer_network "Computer network")  configurations. TDD encourages developers to put the minimum amount of code into such modules and to maximize the logic that is in testable library code, using fakes and  [mocks](https://en.wikipedia.org/wiki/Mock_object "Mock object")  to represent the outside world.[[22]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-22)

Management support is essential. Without the entire organization believing that test-driven development is going to improve the product, management may feel that time spent writing tests is wasted.[[23]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-23)

Unit tests created in a test-driven development environment are typically created by the developer who is writing the code being tested. Therefore, the tests may share blind spots with the code: if, for example, a developer does not realize that certain input parameters must be checked, most likely neither the test nor the code will verify those parameters. Another example: if the developer misinterprets the requirements for the module he is developing, the code and the unit tests he writes will both be wrong in the same way. Therefore, the tests will pass, giving a false sense of correctness.

A high number of passing unit tests may bring a false sense of security, resulting in fewer additional  [software testing](https://en.wikipedia.org/wiki/Software_testing "Software testing")  activities, such as  [integration testing](https://en.wikipedia.org/wiki/Integration_testing "Integration testing")  and  [compliance testing](https://en.wikipedia.org/wiki/Compliance_testing "Compliance testing").

Tests become part of the maintenance overhead of a project. Badly written tests, for example ones that include hard-coded error strings, are themselves prone to failure, and they are expensive to maintain. This is especially the case with  [fragile tests](https://en.wikipedia.org/w/index.php?title=Fragile_tests&action=edit&redlink=1 "Fragile tests (page does not exist)").[[24]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-24)  There is a risk that tests that regularly generate false failures will be ignored, so that when a real failure occurs, it may not be detected. It is possible to write tests for low and easy maintenance, for example by the reuse of error strings, and this should be a goal during the  [code refactoring](https://en.wikipedia.org/wiki/Code_refactoring "Code refactoring")  phase described above.

Writing and maintaining an excessive number of tests costs time. Also, more-flexible modules (with limited tests) might accept new requirements without the need for changing the tests. For those reasons, testing for only extreme conditions, or a small sample of data, can be easier to adjust than a set of highly detailed tests.

The level of coverage and testing detail achieved during repeated TDD cycles cannot easily be re-created at a later date. Therefore, these original, or early, tests become increasingly precious as time goes by. The tactic is to fix it early. Also, if a poor architecture, a poor design, or a poor testing strategy leads to a late change that makes dozens of existing tests fail, then it is important that they are individually fixed. Merely deleting, disabling or rashly altering them can lead to undetectable holes in the test coverage.

## Test-driven work[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=10 "Edit section: Test-driven work")]

Test-driven development has been adopted outside of software development, in both product and service teams, as test-driven work.[[25]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-25)  Similar to TDD, non-software teams develop  [quality control](https://en.wikipedia.org/wiki/Quality_control "Quality control")  (QC) checks (usually manual tests rather than automated tests) for each aspect of the work prior to commencing. These QC checks are then used to inform the design and validate the associated outcomes. The six steps of the TDD sequence are applied with minor semantic changes:

1.  "Add a check" replaces "Add a test"
2.  "Run all checks" replaces "Run all tests"
3.  "Do the work" replaces "Write some code"
4.  "Run all checks" replaces "Run tests"
5.  "Clean up the work" replaces "Refactor code"
6.  "Repeat"

## TDD and ATDD[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=11 "Edit section: TDD and ATDD")]

Test-driven development is related to, but different from  [acceptance test–driven development](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development "Acceptance test–driven development")  (ATDD).[[26]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-26)  TDD is primarily a developer's tool to help create well-written unit of code (function, class, or module) that correctly performs a set of operations. ATDD is a communication tool between the customer, developer, and tester to ensure that the requirements are well-defined. TDD requires test automation. ATDD does not, although automation helps with regression testing. Tests used in TDD can often be derived from ATDD tests, since the code units implement some portion of a requirement. ATDD tests should be readable by the customer. TDD tests do not need to be.

## TDD and BDD[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=12 "Edit section: TDD and BDD")]

BDD ([behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development "Behavior-driven development")) combines practices from TDD and from ATDD.[[27]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-27)  It includes the practice of writing tests first, but focuses on tests which describe behavior, rather than tests which test a unit of implementation. Tools such as  [JBehave](https://en.wikipedia.org/w/index.php?title=JBehave&action=edit&redlink=1 "JBehave (page does not exist)"),  [Cucumber](https://en.wikipedia.org/wiki/Cucumber_(software) "Cucumber (software)"),  [Mspec](https://en.wikipedia.org/w/index.php?title=Mspec&action=edit&redlink=1 "Mspec (page does not exist)")  and  [Specflow](https://en.wikipedia.org/wiki/Specflow "Specflow")  provide syntaxes which allow product owners, developers and test engineers to define together the behaviors which can then be translated into automated tests.

## Code visibility[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=13 "Edit section: Code visibility")]

[Test suite](https://en.wikipedia.org/wiki/Test_suite "Test suite")  code clearly has to be able to access the code it is testing. On the other hand, normal design criteria such as  [information hiding](https://en.wikipedia.org/wiki/Information_hiding "Information hiding"), encapsulation and the  [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns "Separation of concerns")  should not be compromised. Therefore, unit test code for TDD is usually written within the same project or  [module](https://en.wikipedia.org/wiki/Module_(programming) "Module (programming)")  as the code being tested.

In  [object oriented design](https://en.wikipedia.org/wiki/Object_oriented_design "Object oriented design")  this still does not provide access to private data and methods. Therefore, extra work may be necessary for unit tests. In  [Java](https://en.wikipedia.org/wiki/Java_(programming_language) "Java (programming language)")  and other languages, a developer can use  [reflection](https://en.wikipedia.org/wiki/Reflection_(computer_science) "Reflection (computer science)")  to access private fields and methods.[[28]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-28)  Alternatively, an  [inner class](https://en.wikipedia.org/wiki/Inner_class "Inner class")  can be used to hold the unit tests so they have visibility of the enclosing class's members and attributes. In the  [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework ".NET Framework")  and some other programming languages,  [partial classes](https://en.wikipedia.org/wiki/Partial_class "Partial class")  may be used to expose private methods and data for the tests to access.

It is important that such testing hacks do not remain in the production code. In  [C](https://en.wikipedia.org/wiki/C_(programming_language) "C (programming language)")  and other languages,  [compiler directives](https://en.wikipedia.org/wiki/Directive_(programming) "Directive (programming)")  such as  `#if DEBUG ... #endif`  can be placed around such additional classes and indeed all other test-related code to prevent them being compiled into the released code. This means the released code is not exactly the same as what was unit tested. The regular running of fewer but more comprehensive, end-to-end, integration tests on the final release build can ensure (among other things) that no production code exists that subtly relies on aspects of the test harness.

There is some debate among practitioners of TDD, documented in their blogs and other writings, as to whether it is wise to test private methods and data anyway. Some argue that private members are a mere implementation detail that may change, and should be allowed to do so without breaking numbers of tests. Thus it should be sufficient to test any class through its public interface or through its subclass interface, which some languages call the "protected" interface.[[29]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-29)  Others say that crucial aspects of functionality may be implemented in private methods and testing them directly offers advantage of smaller and more direct unit tests.[[30]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-30)[[31]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-31)


## Fakes, mocks and integration tests[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=17 "Edit section: Fakes, mocks and integration tests")]

Unit tests are so named because they each test  _one unit_  of code. A complex module may have a thousand unit tests and a simple module may have only ten. The unit tests used for TDD should never cross process boundaries in a program, let alone network connections. Doing so introduces delays that make tests run slowly and discourage developers from running the whole suite. Introducing dependencies on external modules or data also turns  _unit tests_  into  _integration tests_. If one module misbehaves in a chain of interrelated modules, it is not so immediately clear where to look for the cause of the failure.

When code under development relies on a database, a web service, or any other external process or service, enforcing a unit-testable separation is also an opportunity and a driving force to design more modular, more testable and more reusable code.[[33]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-33)  Two steps are necessary:

1.  Whenever external access is needed in the final design, an  [interface](https://en.wikipedia.org/wiki/Interface_(computer_science) "Interface (computer science)")  should be defined that describes the access available. See the  [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle "Dependency inversion principle")  for a discussion of the benefits of doing this regardless of TDD.
2.  The interface should be implemented in two ways, one of which really accesses the external process, and the other of which is a  [fake or mock](https://en.wikipedia.org/wiki/Mock_object "Mock object"). Fake objects need do little more than add a message such as "Person object saved" to a  [trace log](https://en.wikipedia.org/wiki/Tracing_(software) "Tracing (software)"), against which a test  [assertion](https://en.wikipedia.org/wiki/Assertion_(computing) "Assertion (computing)")  can be run to verify correct behaviour. Mock objects differ in that they themselves contain  [test assertions](https://en.wikipedia.org/wiki/Assertion_(computing) "Assertion (computing)")  that can make the test fail, for example, if the person's name and other data are not as expected.

Fake and mock object methods that return data, ostensibly from a data store or user, can help the test process by always returning the same, realistic data that tests can rely upon. They can also be set into predefined fault modes so that error-handling routines can be developed and reliably tested. In a fault mode, a method may return an invalid, incomplete or  [null](https://en.wikipedia.org/wiki/Null_character "Null character")  response, or may throw an  [exception](https://en.wikipedia.org/wiki/Exception_handling "Exception handling"). Fake services other than data stores may also be useful in TDD: A fake encryption service may not, in fact, encrypt the data passed; a fake random number service may always return 1. Fake or mock implementations are examples of  [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection "Dependency injection").

A Test Double is a test-specific capability that substitutes for a system capability, typically a class or function, that the UUT depends on. There are two times at which test doubles can be introduced into a system: link and execution. Link time substitution is when the test double is compiled into the load module, which is executed to validate testing. This approach is typically used when running in an environment other than the target environment that requires doubles for the hardware level code for compilation. The alternative to linker substitution is run-time substitution in which the real functionality is replaced during the execution of a test case. This substitution is typically done through the reassignment of known function pointers or object replacement.

Test doubles are of a number of different types and varying complexities:

-   [Dummy](https://en.wikipedia.org/wiki/Dummy_code "Dummy code")  – A dummy is the simplest form of a test double. It facilitates linker time substitution by providing a default return value where required.
-   [Stub](https://en.wikipedia.org/wiki/Method_stub "Method stub")  – A stub adds simplistic logic to a dummy, providing different outputs.
-   Spy – A spy captures and makes available parameter and state information, publishing accessors to test code for private information allowing for more advanced state validation.
-   [Mock](https://en.wikipedia.org/wiki/Mock_object "Mock object")  – A mock is specified by an individual test case to validate test-specific behavior, checking parameter values and call sequencing.
-   Simulator – A simulator is a comprehensive component providing a higher-fidelity approximation of the target capability (the thing being doubled). A simulator typically requires significant additional development effort.[[8]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Pathfinder_Solutions-8)

A corollary of such dependency injection is that the actual database or other external-access code is never tested by the TDD process itself. To avoid errors that may arise from this, other tests are needed that instantiate the test-driven code with the "real" implementations of the interfaces discussed above. These are  [integration tests](https://en.wikipedia.org/wiki/Integration_testing "Integration testing")  and are quite separate from the TDD unit tests. There are fewer of them, and they must be run less often than the unit tests. They can nonetheless be implemented using the same testing framework.

Integration tests that alter any  [persistent store](https://en.wikipedia.org/wiki/Persistent_storage "Persistent storage")  or database should always be designed carefully with consideration of the initial and final state of the files or database, even if any test fails. This is often achieved using some combination of the following techniques:

-   The  `TearDown`  method, which is integral to many test frameworks.
-   `try...catch...finally`  [exception handling](https://en.wikipedia.org/wiki/Exception_handling "Exception handling")  structures where available.
-   [Database transactions](https://en.wikipedia.org/wiki/Database_transactions "Database transactions")  where a transaction  [atomically](https://en.wikipedia.org/wiki/Atomicity_(database_systems) "Atomicity (database systems)")  includes perhaps a write, a read and a matching delete operation.
-   Taking a "snapshot" of the database before running any tests and rolling back to the snapshot after each test run. This may be automated using a framework such as  [Ant](https://en.wikipedia.org/wiki/Apache_Ant "Apache Ant")  or  [NAnt](https://en.wikipedia.org/wiki/NAnt "NAnt")  or a  [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration "Continuous integration")  system such as  [CruiseControl](https://en.wikipedia.org/wiki/CruiseControl "CruiseControl").
-   Initialising the database to a clean state  _before_  tests, rather than cleaning up  _after_  them. This may be relevant where cleaning up may make it difficult to diagnose test failures by deleting the final state of the database before detailed diagnosis can be performed.

## TDD for complex systems[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=18 "Edit section: TDD for complex systems")]

Exercising TDD on large, challenging systems requires a modular architecture, well-defined components with published interfaces, and disciplined system layering with maximization of platform independence. These proven practices yield increased testability and facilitate the application of build and test automation.[[8]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Pathfinder_Solutions-8)

### Designing for testability[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=19 "Edit section: Designing for testability")]

Complex systems require an architecture that meets a range of requirements. A key subset of these requirements includes support for the complete and effective testing of the system. Effective modular design yields components that share traits essential for effective TDD.

-   [High Cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science) "Cohesion (computer science)")  ensures each unit provides a set of related capabilities and makes the tests of those capabilities easier to maintain.
-   [Low Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming) "Coupling (computer programming)")  allows each unit to be effectively tested in isolation.
-   Published Interfaces restrict Component access and serve as contact points for tests, facilitating test creation and ensuring the highest fidelity between test and production unit configuration.

A key technique for building effective modular architecture is Scenario Modeling where a set of sequence charts is constructed, each one focusing on a single system-level execution scenario. The Scenario Model provides an excellent vehicle for creating the strategy of interactions between components in response to a specific stimulus. Each of these Scenario Models serves as a rich set of requirements for the services or functions that a component must provide, and it also dictates the order that these components and services interact together. Scenario modeling can greatly facilitate the construction of TDD tests for a complex system.[[8]](https://en.wikipedia.org/wiki/Test-driven_development#cite_note-Pathfinder_Solutions-8)

### Managing tests for large teams[[edit](https://en.wikipedia.org/w/index.php?title=Test-driven_development&action=edit&section=20 "Edit section: Managing tests for large teams")]

In a larger system the impact of poor component quality is magnified by the complexity of interactions. This magnification makes the benefits of TDD accrue even faster in the context of larger projects. However, the complexity of the total population of tests can become a problem in itself, eroding potential gains. It sounds simple, but a key initial step is to recognize that test code is also important software and should be produced and maintained with the same rigor as the production code.

Creating and managing the architecture of test software within a complex system is just as important as the core product architecture. Test drivers interact with the UUT, test doubles and the unit test framework.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

  

### `yarn test`

  

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `yarn build`

  

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br />

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `yarn eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

  

### Analyzing the Bundle Size

  

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  

### Making a Progressive Web App

  

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

### Advanced Configuration

  

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  

### Deployment

  

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  

### `yarn build` fails to minify

  

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify