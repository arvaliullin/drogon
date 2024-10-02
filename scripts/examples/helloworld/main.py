#!/usr/bin/env python3

class HelloWorld:
    def __init__(self):
        self.message = 'Hello World!'

    def print_message(self):
        print(self.message)

def main():
    h = HelloWorld()
    h.print_message()

if __name__ == '__main__':
    main()
