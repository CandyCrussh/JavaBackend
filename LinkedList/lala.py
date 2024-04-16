

# class node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None
# class linkedlist:
#     def __init__(self):
#         self.head = None
#     def insertatbegin(self, data):
#         newnode = node(data)  
#         if self.head == None:
#             self.head = newnode
#         else:
#             newnode.next = self.head
#             self.head = newnode
#     def traverse(self):
#         if self.head is None:
#             print("Empty Node")
#         else:
#             current = self.head
#             while current!=None:
#                 print(current.data, end = ' ')
#                 current = current.next                     

# for i in range(0,3):
#     for j in range(0,5):
#         print("* ", end=" ")  
#     print("\n")       
       
# for i in range(0,5):
#     if i ==0 or i==4:
#         for j in range(0,10):   
#             print("* ", end=" ")
#     else:
#         for j in range(0,10):
#             if j == 0 or j == 9:
#                 print("* ",end=" ") 
#             else:
#                 print("  ", end=" ")               
#     print("\n")   
           
# for i in range(0,5):
#     for j in range(0,i+1):
#         print("*", end=" ")
#     print("\n")   

# for i in range(0,5):
#     for j in range(0,5-i):
#         print("*", end=" ")
#     print("\n")   

# for i in range(0,5):
#     for j in range(0,i+1):
#         print(j+1, end=" ")
#     print("\n")   
    
# for i in range(0,5):
#     for j in range(0,5-i):
#         print(j+1, end=" ")
#     print("\n")  
# 
# a = int(input("enter a number : "))
# sum = 0
# temp = a
# while temp>0:  
#     num = temp%10
#     sum += num**3
#     temp //=10
# if a == sum:
#     print("Number is armstrong")
# else:
#     print("Not armstrong")
           
# a = int(input("enter a number : "))
# if a > 0:
#     for i in range(2,int(a/2) + 1):
#         if a%i == 0:
#             print("not prime")
#             break
#     else:
#             print("prime number")
# else:
#     print("not prime")      

# lst = ["1", "2", 3]
# tup = tuple(lst)
# print(tup) 
# print(type(tup))     

# my_list = [50 , "Twenty", 110, "fifty", "Ten", 20, 10, 80,"Eighty"]
# tup = (my_list)
# print(tup)    

# import numpy as np

# lst = [1,2,3]
# arr = np.array(lst)

# y = int(input())

# fun = lambda y: y*y 
# print(fun(3))

# for i in range(0,5):
#     if i==3:
#         print("found")
#         break
# else:
#     print("out")

# def generator(num):
#     for i in range(num):
#         if i%2 != 0:
#             yield i
# result = generator(8)
# print(next(result))
# print(next(result))

# import random as rm

# anotation = ['@', '#', '&', '$']
# def outer(func):
#     def inner():
#         print(rm.choice(anotation)*5)
#         func()
#         print(rm.choice(anotation)*5)
#     return inner

# @outer
# def func1():
#     print("Running decorators")

# func1 = outer(func1)   
# func1()

# import functools as ft
# lst = [2,4,7,9,6]

# fun = map(lambda x : x+x, lst)
# print(list(fun))
# fun = ft.reduce(lambda x,y : x+y, lst)
# print(fun)
# fun = filter(lambda x: x%2==0, lst)
# print(list(fun))

# def add_num(n):  
#     def addition(x):  
#         return x+n  
#     return addition  
# add_2=add_num(2)  
# add_8=add_num(8)  
# print(add_2(4))  
# print(add_2(8))  
# print(add_8(add_2(7)))  
    



