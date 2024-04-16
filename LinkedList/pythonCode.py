
# Write a program to compute the net run rate

Runs_Scored = int(input("Enter Total no. of runs scored : "))
Overs_bowled = int(input("Enter Total no. of overs bowled : "))
Runs_conceded = int(input("Enter Total no. of runs conceded : "))
Overs_faced = int(input("Enter Total no. of overs faced : "))

NRR = ((Runs_Scored/Overs_bowled)-(Runs_conceded/Overs_faced)) 

print(f"Net Run Rate : {NRR:.2f}")


# Write a program to check whether the given character is an uppercase letter or lowercase letter

char = input("Enter any Character : ")

if(char.isupper()):
    print("Given Character is Upper Case")
else:
    print("Given Chacracter is Lower Case")   

# Write a program to find the maximum number out of the given three numbers

lst = []
print("Enter any three numbers :")
for i in range(0, 3):
    num = int(input())
    lst.append(num)
max1 = max(lst)
print("Maximum of three numbers is:", max1)


# Write a program to check whether the entered number is Armstrong or not

n = int(input("Enter any number : "))
s = n  
b = len(str(n))
sum1 = 0
while n != 0:
    r = n % 10
    sum1 = sum1+(r**b)
    n = n//10
if s == sum1:
    print(f"The given number {s} is armstrong number")
else:
    print(f"The given number {s} is not armstrong number")


# Write a program to print a multiplication table of the entered number.

num = int(input("Enter a number : "))

for i in range(0,10):
    print(f"{num} x {i+1} = {num*(i+1)}")


# Write a program to create a list of students marks with user-defined values and find the maximum

num1 = int(input("Enter number of students marks to be entered : "))
lst = []
for i in range(0,num1):
    mks = int(input(f"Marks for Student {i+1} : "))
    lst.append(mks)
print("List of Students Marks : ",lst)    
lst = max(lst)    
print(f"Maximum marks obtainede is {lst}") 

# Write a program to create a list of numbers and swap the content with the next value divisible by 5. For example: list = [4,25,31,7,35,44,55] Output: [25,4,31,35,7,55,44]

num1 = int(input("Enter number : "))
lst = []
# lst = [4,25,31,7,35,44,55]
for i in range(0,num1):
    mks = int(input())
    lst.append(mks)
print(lst)
for i in range(len(lst)):
    if lst[i] % 5 == 0:
            lst[i], lst[i-1] = lst[i-1], lst[i]
print(lst)       


# An electric power distribution company charges its domestic consumers as follows: Write a program that read the customer number & power consumed and prints the amount to be paid by the customer. Note that output should be well formatted

c_no = int(input("Enter any customer number : "))
power_consumed = int(input("Enter power_consumed : "))
if 0<power_consumed<=100 :
    print(f"{power_consumed * 1}")      
elif 101<power_consumed<=300 :
    print(f"{100 + (power_consumed * 1.25)}")      
elif 301<power_consumed<=500 :
    print(f"{350 + (power_consumed * 1.50)}")      
else :
    print(f"{650 + (power_consumed * 1.75)}")
             
 



