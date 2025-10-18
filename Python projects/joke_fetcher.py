import requests

# Function to get random joke
def get_joke():
    #Make a request to the JokeAPI (this is a public API, no authentication required)
    url = "https://v2.jokeapi.dev/joke/Any"
    response = requests.get(url)

    # Check if the request was successfull (status code 200)
    if response.status_code == 200:
        joke_data = response.json() # Parse the JSON response

        # Check if the joke is single-line or two-part (setup and delivery)
        if joke_data['type'] == 'single':
            print(joke_data['joke']) # Print the single-line joke
        elif joke_data['type'] == 'twopart':
            print(f"{joke_data['setup']}\n{joke_data['delivery']}")  # Print the setup and delivery of the joke
    else:
        print("Sorry, there was an erro fetching joke. Please try again.")

def main():
    print("Welcome to the Random Joke Generator!")

    # Start the loop for asking if the user wants a joke
    while True:
        user_input = input("Do you want to hear a joke? (yes/no): ").lower()

        if user_input == 'yes':
            get_joke()  # Get and print the first joke

            # After telling a joke, ask if the user wants to hear another one
            while True:
                another_joke = input("Do you want to hear another joke? (yes/no): ").lower()
                if another_joke == 'yes':
                    get_joke()  # Get and print another joke
                elif another_joke == 'no':
                    print("Goodbye!")
                    return  # Exit the program
                else:
                    print("Please enter 'yes' or 'no'.")  # Handle invalid input

        elif user_input == 'no':
            print("Goodbye!")
            break  # Exit the program

        else:
            print("Please enter 'yes' or 'no'.")  # Handle invalid input

if __name__ == "__main__":
    main()