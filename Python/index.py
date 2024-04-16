
import sys

# def fact(n):
#     if (n==1 or n==0):
#         return 1
#     else:
#         return n*fact(n-1)
# c = fact(5)
# print(c)


# -----------------------------------------------GENERATORS----------------------------------------------------
# n = int(input("Enter maximum limit : "))
# def num(n):
#     for i in range(1,n):
#         yield i
# g = num(6)
# print(next(g))  
# print(next(g))  
# print(next(g))  

# ----------------------------------------------Closures and Decorators-------------------------------------------------------
# import math
# import random

# # def fun():
# #     print("My name is choco babu")

# def outer(message, name):
#     annotaions = ["+", "-","*","$","@"]
#     annotate = random.choice(annotaions)
#     def inner():
#         print(annotate*50)
#         print(message, name)
#         print(annotate*50)
#     return inner

# fun1 = outer("Hello", "Nick")
# fun2 = outer("Hello", "Joe")
# fun3 = outer("Hello", "Harry")

# print(fun1())
# print(fun2())
# print(fun3())

import math
import random

# def fun():
#     print("My name is choco babu")

# def msg():
#     print("Yohooo !!! Have a nice day")

# def greet():
#     annotaions = ["+", "-","*","$","@"]
#     annotate = random.choice(annotaions)
#     def inner():
#         print(annotate*50)
#         msg()
#         print(annotate*50)
#     return inner
# c = greet()
# print(c())




# def greet(func):
#     annotaions = ["+", "-","*","$","@"]
#     annotate = random.choice(annotaions)
#     def inner():
#         print(annotate*50)
#         func()
#         print(annotate*50)
#     return inner

# @greet
# def msg():
#     print("Yohooo !!! Have a nice day")
# msg()    

# @greet
# def msg1():
#     print("whats up !!! how's your day is going")
# msg1()

# def safe_calc(func):
#     def calculate(r):
#         if(r<=0):
#             raise ValueError("Alert!!! Value cannot be negative or zero.")
#         return func(r)
#     return calculate

# @safe_calc
# def circle_area(r):
#     return math.floor(math.pi*r*r)
# print(circle_area(-56))

# @safe_calc
# def circle_circumference(r):
#     return math.floor(2*math.pi*r)
# print(circle_circumference(8))


# def safe_calc(func):
#     def calculate(*args):
#         for arg in args:
#             if(arg<=0):
#                 raise ValueError("Alert!!! Value cannot be negative or zero.")
#             return func(*args)
#     return calculate

# @safe_calc
# def circle_area(r):
#     return math.floor(math.pi*r*r)
# print(circle_area(6))

# @safe_calc
# def circle_circumference(r):
#     return math.floor(2*math.pi*r)
# print(circle_circumference(8))

# @safe_calc
# def area_of_rectangle(length, breadth):
#     return math.floor(length*breadth)
# print(area_of_rectangle(8, 9))

# def all_args(*args):
#     for i in args:
#         print(f'{i}')

# all_args("1", "2", "3","4","8")

# def all_args(**args):
#     for i in args.items():
#         new_func(args, i)

# def new_func(args, i):
#     print(f'{i}')
#     print(f'{args.keys()}')

# all_args(arg1="1",arg2= "2",arg3= "3",arg4="4",arg5="8")

# -----------------------------------------------------------------------------------------------------------------

# a = int(input("Enter maximum limit : "))
# def fun(n):
#     a=0
#     b=1
#     print(a)
#     print(b)
#     for i in range(0,n):
#         c=a+b
#         print(c)
#         a=b
#         b=c
# fun(a)

# n = int(input("Enter maximum limit : "))
# a=0
# b=1
# print(a)
# print(b)
# def fun(a,b):
    
#     c=a+b
#     return c + fun(a,b)
#     a=b
#     b=c
# fun(a,b)


# map function
# l = lambda x: x*x #square function
# n = [1,2,3,4,5,6]
# a = map(l,n)
# print(list(a))

# filter
# l = [2,4,9,3,18,36,13]
# n = lambda x:x%2==0
# a = filter(n, l)
# print(list(a))

# reduce
# import functools as f
    
# l = [2,4,9,11,18,36,43]
# n = lambda x,y : y*2-x*2
# a = f.reduce(n, l)
# print(a)

# string = "my name is choco babu"
# print()
# print(help(str))

# ---------------------------------Selection Sort---------------------------------------------------

# import random

# list1 = []

# for i in range(0,10):
#     a = random.randint(1,100)
#     list1.append(a)

# print("Elements before sort : ")
# print(list1)

# a = len(list1)
# print("Size of list : ", a)

# Selection sort

# for i in range(0,a):
#     for j in range(1,a):
#         if list1[i] < list1[j]:
#             list1[i],list1[j] = list1[j],list1[i]   

# # list1[0],list1[a-1] = list1[a-1],list1[0] 
# print(list1)

# Bubble sort

# for i in range(0,a):
#     for j in range(1,i+1):
#         if list1[i] < list1[j]:
#             list1[i],list1[j] = list1[j],list1[i]   

# print("Elements after sort : ")  
# a = list1.sort 
# # a = sorted(list1)
# print(a)

# print(dir(sorted))

# user defined 
# class myException(Exception):
#     def __init__(self, message):
#         super().__init__()
#         self.message = message

# def add(a, b):
#     try:
#         if(type(a)==int or type(b)==int):
#             print(a + b)
#     except Exception as e:
#         raise Exception("Wrong input !!!")

# add(4, "9")

# lst1 = [2,3,6,7]
# lst2 = [1,2,3,6,8]
# list3 = lst1+lst2
# list3.sort()
# print(list3)

# str1 = "11"
# str2 = "1"
# str3 = bin(int(str1))+bin(int(str2))
# str(str3)
# print(str3)

a = "11"
b = "1"
c = bin(int(a)+int(b))
print(c)

# Python program to add two binary numbers.
 
# Driver code
# Declaring the variables
a = "1101"
b = "100"
 
# Calculating binary value using function
sum = bin(int(a, 2) + int(b, 2))
 
# Printing result
print(sum[2:])







