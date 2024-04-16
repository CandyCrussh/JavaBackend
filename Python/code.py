
# for i in range(1,11):
#     print(i)
#     if i%2!=0:
#         continue
#     # if i==2:
#     #     continue
#     # print(i)
# else:
#     print("executed")    

# num = int(input("enter any number : "))
# if num > 1:
#     for i in range(2,int(num/2)+1):
#         if num%i == 0:
#             print(num, "is not a a prime number")
#             break
#     else:
#         print("number is prime number")
# else:
#     print("number is not a prime number")       

# class person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#     def info(self):
#         print(f"{self.name} {self.age}")

# class address(person):
#     def __init__(self, name, age, dob):
#         super().__init__(name, age)
#         self.dob = dob

#     def info(self):
#         print(f"{self.name} {self.age} {self.dob}")

# p1 = address("Nikhil", 24, 10121999)
# # p1 = person("Nikhil", 24)
# p1.info()

# n = int(input("Enter any number : "))
# if n > 1:
#     for i in range(2,int(n/2)+1):
#         if n%i == 0:
#             print("Number is not prime")
#             break
#     else:
#         print("number is prime")
# else:
#     print("number is not prime")    

# n = int(input("Enter any number : "))
# s = n
# b = len(str(n))
# sum = 0
# while n!=0:
#     r = n%10
#     sum = sum + r**b
#     n = n//10
# if sum == s:
#     print("number is armstrong")
# else:
#     print("number is not armstrong")

#-> find a power b using recursion?

# a = 2
# def power(a,b):
#     if b == 0:
#         return 1
#     else:
#         return a*power(a,b-1)
# pw = power(3,4)
# print(pw)

# n = 27
# def isPowerOfThree(n):
#     if n == 0 or n == -1:
#         return False
#     elif isPowerOfThree(n%3)==0:
#         return True
    
# isPowerOfThree(27)

# a = "nikhil"
# rev = a[::-1]
# print(rev)



# inp = "aaakknaaccdnxx"
# # out = a3k2n1a2c2d1n1x2
# ans = ""
# cnt = 1 
# for i in range(len(inp)):
#     if i+1 < len(inp) and inp[i]==inp[i+1] :
#         cnt+=1
#     else:
#         ans+=inp[i] + str(cnt)
#         cnt = 1   #reset
# print(ans)  


# def out(a):
#     def inner(b):
#         return a**b
#     return inner

# ans = out(4)
# val = ans(3)
# print(val)

# s = "abcabcbb"
# s = "bbbbb"
# s = "pwwkew"
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# max sum subarray of k
# arr = [1,4,6,3,8,2,9,5]

# # window size j-i+1
# k = 3
# sum = []
# ans = []
# max_sum = []
# for i in range(len(arr)):
#     if i<len(arr) and len(arr[i:i+3]) == k:
#        print(arr[i:i+3])
#     max_sum.append(max(arr[i:i+3]))
# print(max_sum)
# for i in range(0,len(arr)-k):
#     for j in range(0,k):
#         sum.append(arr[j])
#     print(sum)
#     sum = []
# print(ans)

# import re

# text = "Hello, world!"
# # clean_text = re.sub(r"[^\w+\s]","",text)
# clean_text = re.sub(r"[\W]","",text)
# print(clean_text)

# import threading

# k = 0

# def func1(a):
#     global k
#     for i in range(a):
#         k+=1
# mt1 = threading.Thread(target=func1, args=(1000000,))
# mt2 = threading.Thread(target=func1, args=(1000000,))
# print("Value of k before thread start : ",k)

# mt1.start()
# mt2.start()
# mt1.join()
# mt2.join()

# print("Value of k after thread start : ",k)

# num = int(input("Enter number : "))

# if((num%400 == 0) or num%100!=0 and num%4 == 0)  :
#     print("Leap year")
# else :
#     print("Not leap year")




      