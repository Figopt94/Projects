# Function add
def add(x, y):
    return x + y

# Function subtraction
def subtract(x, y):
    return x - y

# Function multiplication
def multiply(x, y):
    return x * y

# Function division
def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    else:
        return x / y

# Display the menu to the user
def calculator():
    while True:
        print("Select Operation:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Quit")

        # Get user input choice
        choice = input("Enter choice (1/2/3/4/5): ")

        # If user wants to Quit
        if choice == '5':
            print("Thank you for using the calculator!")
            break

        # Ensure valid choice
        if choice not in ['1', '2', '3', '4']:
            print("Invalid choice! Please select a valid option (1, 2, 3, 4 or 5).")
            continue  # Return to the menu for another try

        # Get user input for numbers and handle invalid input
        while True:
            try:
                num1 = float(input("Enter first number: "))  # Try to convert input to float
                num2 = float(input("Enter second number: "))  # Try to convert input to float
                break  # Exit the loop if both inputs are valid
            except ValueError:
                print("Invalid input! Please enter numeric values.")  # Error message if input is not a number

        # Perform calculation based on the user's choice
        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")

# Run the calculator
calculator()
