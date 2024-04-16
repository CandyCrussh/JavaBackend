
# import re
# str1 = "I am a billionaire and the CEO of Alphabet Inc."

# # print(help(re))
# print(rx)

# /abc[def] = abcd , abce, abcf should be match
# /[^abc] = matches other than abc character
# /[a-z0-9] = matches character from a-z and 0-9
# /[abc/^] = matches charcters like abc^ like that
# /[ca*t] = cat caaat caaaat ct etc. //0 or multiple times
# /[ca+t] = cat caaat caaaat ct etc. //1 or multiple times
# /[ca?t] = cat ct .// 0 or 1
# /[ca{2,4}t] = cat caat caaat. minimum 2 and max 4
# today|TODAY = that means OR

# 989-962-9568 = pattern would be /[(\d{3}-){2}\d{4}]


# import threading
# import time

# class mythread(threading.Thread):
#     def __init__(self, a):
#         super().__init__()
#         self._a = a
#     def run(self):
#         # time.sleep(self._a)
#         print("threading process getting executed")
#         for i in range(0,10):
#             print(i)

# mt1 = mythread(1)
# mt2 = mythread(3)
# mt1.start()
# mt1.join() #you are asking the main thread to wait till the thread to be completed
# mt2.start()
# mt2.join()
    
# ----------------    # 
# from threading import Thread
# def func1(a, b):
#     print("threading process getting executed")
#     return a + b

# mt1 = Thread(target = func1, args = (1,2))
# mt1.start()
# mt1.join()

# ------------------------------------------------------------------------------------------------

# k = 0

# # read k
# # update k
# # write k


# def func1(a):
#     global k
#     for i in range(a):
#       k += 1

# mt1 = threading.Thread(target=func1, args=(10000000,))
# mt2 = threading.Thread(target=func1, args=(10000000,))
# print("Value of k before thread start : ",k)

# mt1.start()
# mt2.start()
# mt1.join()
# mt2.join()

# print("Value of k after thread start : ",k)

# # ---------------------------------------------------------------------------------------
# # from threading import Thread, Lock

# # k = 0

# # # read k
# # # update k
# # # write k


# # def func1(a):
# #     global k
# #     for i in range(a):
# #         Lock.acquire()
# #         k += 1
# #         Lock.release()

# # mt1 = Thread(target=func1, args=(10000000000,))
# # mt2 = Thread(target=func1, args=(10000000000,))
# # print("Value of k before thread start : ",k)

# # mt1.start()
# # mt2.start()
# # mt1.join()
# # mt2.join()

# # print("Value of k after thread start : ",k)

# ------------------------------------------------------------------

# condition

# import threading
# import time
# godown = []

# def produce(cv):
#     while(True):
#         with cv:
#             godown.append('item')
#             print("Producers Produced !!!")
#             cv.notify()
#             time.sleep(1)

# def consume(cv):
#     while(True):
#         with cv:
#             cv.wait()
#             print(godown.pop())
#             print("consumers consumed !!!")

# condition = threading.Condition()

# po = threading.Thread(target=produce, args=(condition,))
# co = threading.Thread(target=consume, args=(condition,))

# # for multiple 
# # po1 = threading.Thread(target=produce, args=(condition,))
# # co1 = threading.Thread(target=consume, args=(condition,))

# po.start()
# co.start()
# po.join()
# co.join()

# # po1.start()
# # co1.start()
# # po1.join()
# # co1.join()

# -------------------------------------------------------------------------------------------
# Barrier

# c = 0

# # reach vishakhapatnam
# # fly to delji

# def flytodelhi():
#     print("Book fligt")
#     print("Board fligt")
#     print("Travel")
#     print("Reach Delhi")
    

# def reachv():
#     global c
#     print("Book cab")
#     print("Board cab")
#     print("Travel")
#     print("Reach v")
#     print("-------------------------------------------------")
#     c += 1
#     if(c == 10):
#         flytodelhi()

# f1 = threading.Thread(target=reachv)
# f2 = threading.Thread(target=reachv)
# f3 = threading.Thread(target=reachv)
# f4 = threading.Thread(target=reachv)
# f5 = threading.Thread(target=reachv)
# f6 = threading.Thread(target=reachv)
# f7 = threading.Thread(target=reachv)
# f8 = threading.Thread(target=reachv)
# f9 = threading.Thread(target=reachv)
# f10 = threading.Thread(target=reachv)

# f1.start()
# f2.start()
# f3.start()
# f4.start()
# f5.start()
# f6.start()
# f7.start()
# f8.start()
# f9.start()
# f10.start()

# f1.join()
# f2.join()
# f3.join()
# f4.join()
# f5.join()
# f6.join()
# f7.join()
# f8.join()
# f9.join()
# f10.join()

# ---------------------------------------------------------------------
# reach vishakhapatnam
# fly to delji

# def flytodelhi():
#     print("Book fligt")
#     print("Board fligt")
#     print("Travel")
#     print("Reach Delhi")
    

# def reachv(f):
#     print("Book cab")
#     print("Board cab")
#     print("Travel")
#     print("Reach v")
#     print(f, 'reached v')
#     print("-------------------------------------------------")
#     barrier.wait()

# barrier = threading.Barrier(10, action=flytodelhi)
# f1 = threading.Thread(target=reachv, args=('f1',))
# f2 = threading.Thread(target=reachv, args=('f2',))
# f3 = threading.Thread(target=reachv, args=('f3',))
# f4 = threading.Thread(target=reachv, args=('f4',))
# f5 = threading.Thread(target=reachv, args=('f5',))
# f6 = threading.Thread(target=reachv, args=('f6',))
# f7 = threading.Thread(target=reachv, args=('f7',))
# f8 = threading.Thread(target=reachv, args=('f8',))
# f9 = threading.Thread(target=reachv, args=('f9',))
# f10 = threading.Thread(target=reachv, args=('f10',))

# f1.start()
# f1.join()

# f2.start()
# f2.join()

# f3.start()
# f3.join()

# f4.start()
# f4.join()

# f5.start()
# f5.join()

# f6.start()
# f6.join()

# f7.start()
# f7.join()

# f8.start()
# f8.join()

# f9.start()
# f9.join()

# f10.start()
# f10.join()

# ---------------------------------------------------------------------------------------------------------
# semaphores

# 4 database connections are availble and 100 customers want to use that database that can be done by semaphores

# import threading

# s = threading.Semaphore(4)

# def database():
#     s.acquire()
#     print("database connection used ")
#     s.release()

# num = []
# num.append(7)
# print(num)

# class Solution(ob

# l1 = [2,4,3]
# l2 = [5,6,4]

# b = len(l1)
# c = len(l2)

# l1.reverse()
# l2.reverse()

# li1 = ''.join([str(elem) for elem in l1]) #converts lists to string
# li2 = ''.join([str(elem) for elem in l2])
# print(type(li1))
# a = int(li1) + int(li2)
# print(type(a))
# res = [int(x) for x in str(a)] #converts integer to list 

# print(res)


# count = 0
# a = []
# s = "abcabcbb"
# res = list(s)
# len1 = len(res)
# print(res)
# print(len1)
# for i in range(0,len1):
#     if res[i] != res[i+1]:
#         a.append(res[i])
#     else:
#         continue
# print(a)

# class Solution(object):
#     def __init__(self,s):
#         self.s = s
#     def isValid(self):
#         stack = []
#         d = {'(':')','{':'}','[':']'}
#         # b = self.s
#         # list(self.s)
#         for i in self.s:
#             if i in d:
#                 stack.append(i)
#             elif len(stack)==0 or d[stack.pop()]!=i:
#                 return False
#         return len(stack)==0 

# obj = Solution("(])")
# obj.isValid()

# the number to be reversed
# num = -121

# #convert number to string 
# num_string = str(num)

# #reverse the string using reversed method
# reversed_num = "".join(reversed(num_string))
# print(reversed_num)
# # int(reversed_num)
# print(type(reversed_num))
# if reversed_num != num:
#     print(True)
# else:
#     print(False)
# #output reversed number
# print("Reversed Number is: " + reversed_num)

# 
#           

# nums1 = [1,2,3,0,0,0]
# nums_1 = []
# m = 3
# nums2 = [2,5,6]
# nums_2 = []
# n = 3

# Output: [1,2,2,3,5,6]
 
# out = sorted(nums1 + nums2)
# for i in range(0,m):
#     if nums1[i] == 0:
#         nums_1.append(i)
# nums1 = nums1-nums_1
# for i in range(0,n):
#     if nums2[i] == 0:
#         nums_2.append(i)
# nums2 = nums2-nums_2
# out = sorted(nums1 + nums2)
# print(nums1)        
# print(nums2)        
# print(out)    
# 
# #  
# rom = {'I':1,'V':5, 'X':10,'L':50,'C':100,'D':500,'M':1000}
# for i in range(0,len(rom)):
#     print()

# s = "IX"
# s = "MCMXCIV"
# rom = {'I':1,'V':5, 'X':10,'L':50,'C':100,'D':500,'M':1000}
# i = 0
# num = 0
# s = s.replace("IV","IIII")
# s = s.replace("IX","VIIII")
# s = s.replace("XL","XXXX")
# s = s.replace("XC","LXXXX")
# s = s.replace("CD","CCCC")
# s = s.replace("CM","DCCCC")
# # s = s.replace("IV", "IIII").replace("IX", "VIIII").replace("XL", "XXXX").replace("XC", "LXXXX").replace("CD", "CCCC").replace("CM", "DCCCC")

# len1 = len(s)
# while(i<len1):
#     if s[i] in rom:
#         num = num + rom[s[i]]
#         i = i+1
# print(num)   
# 


# strs = ["flower","flow","flight"]
# a = strs[0]
# print(a[:-1])
# for i in strs:
#     while not i.startswith(a):
#         a = a[:-1]   
# print(a)   

# nums1 = [1,2,3,0,0,0]
# nums_1 = []
# nums_2 = []
# m = 3
# nums2 = [2,5,6]
# n = 3        
# len1 = len(nums1)
# for i in range(0,m):
#     # if nums1[i]!= 0:
#         nums_1.append(nums1[i])
# for i in range(0,n):
#     # if nums2[i]!= 0:
#         nums_2.append(nums2[i])
# print(sorted(nums_1 + nums_2))      
# 
# s = "race a car"
# s = "0P"
# # s = "A man, a plan, a canal: Panama"
# a = s[::-1]
# a = a.lower()
# s = s.lower()
# b = ""  
# c = ""     
# for i in a:
#     if i.isalnum():
#       b = b + i
# print("")     
# for j in s:
#     if j.isalnum():
#        c = c + j 
# print(b)
# print(c)
# if(b == c) :
#    print(True)
# else:
#    print(False)        
# # print(b)


# s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# s1 = ""
# i = 0
# while i < len(s):
#     if s[i] != s[i+1]:
#         s1 = s1 + 1
#     elif s[i] == s[i+1]:
#          continue  
# 
# nums = [0,0,1,1,1,2,2,3,3,4]
# expectedNums = []
# # expectedNums.append(nums[0])
# print(expectedNums)
# for i in range(len(nums)):
#     if(nums[i] != nums[j]):
#         expectedNums.append(nums[i]) 
# print(expectedNums)   
# 
# x = 1
# for i in range(len(nums)-1):
# 	if(nums[i]!=nums[i+1]):
# 		nums[x] = nums[i+1]
# 		x+=1
# print(nums[x])    

# s = "anagram"
# t = "nagaram"

# b = sorted(s)
# c = sorted(t)
# print(b,c)

# nums = [0,1,2,2,3,0,4,2]
# val = 2
# len1 = len(nums)
# for i in range(0,len1):
#     if nums[i] == val:
#         del nums[i]
# print(nums)        
# nums_1 = [0,1,2,2,3,0,4,2]
# # nums_2 = [0,7,2,6,3,0,1,2]
# nums_2 = []
# val = 2
# len1 = len(nums_1)
# print(len1)
# # len2 = len(nums_2)
# for i in range(0,len1-1):
#     if nums_1[i] == nums_1[i+1]:
#         nums_2.append(nums_1[i])
# print(nums_1)        
# print(nums_2)
# 

# nums = [3,2,2,3]
# # nums = [0,1,2,2,3,0,4,2]
# val = 3
# len1 = len(nums)
# print(len1)
# nums = [x for x in nums if x!=val]  
# print(len(nums))
# print(nums)

# flowerbed = [1,0,0,0,1]
# len1 = len(flowerbed)
# print(len1)
# n = 2
# sub = []
# flowerbed = [flowerbed[x] for x in range(0,len1) if len1-1>x>0]
# len1 = len(flowerbed)
# if len1%n == 0:
#     print(True)
# else:
#     print(False)    
# print(len1)
# print(flowerbed)
# print(sub)  
# 
# 

# flowerbed = [1,0,0,0,1]
# n = 1
# cnt = 0
# for i in flowerbed:
#     if n and i == 0:
#          cnt += 1
# if n==cnt:
#     print(True)
# else:
#     print(False)
# flowerbed = [0] + flowerbed + [0]
# print(flowerbed)
# i = 3

# while i < len(flowerbed) - 1:
#     if flowerbed[i-1] == flowerbed[i] == flowerbed[i+1] == 0:
#         n -= 1
#         i += 1
        
#     if n <= 0:
#         print(True)
    
#     i += 1      


# s = "abcabcabcabc"
# s = "aba"
# s1, s2= s[:len(s)//2], s[len(s)//2:]
# print(s1)
# print(s2)
# len1 = len(s)
# if len1%2==0:
#     print(True)
# else:
#     print(False)    

# import re
# haystack = "sadbutsad"
# needle = "sad"
# # haystack = "leetcode"
# # needle = "leeto"
# print(len(needle))
# print(len(haystack))
# # index = []
# # sub = ""
# cnt = 0
# i=0
# while i<len(haystack):
#     if haystack[i:i+len(needle)]==needle:
#         print(i) 
#     i += 1
# print(-1)
   
# for i in range(0,len(haystack)):
#     for j in range(0,len(needle)):
#         if needle[j] != haystack[i]:
#             break
#         if needle[j] == haystack[i]:
#             sub = sub+needle[j]
#             index.append(j)
# print(sub)
# print(index)
# match = re.search(needle,haystack)
# if match:
#     sub = match.group()
#     print(sub)
#     # print(sub.index(haystack))
#     for i in range(0,len(haystack)):
#         if sub ==     
# print(match)
# for i in range(0,len(haystack)):
#     print(match)

# if match:
#     for i in range(0,len(haystack)):

#     print(True)
# else:
#     print(False)

# prices = [7,1,5,3,6,4]
# prices = [7,6,4,3,1]
# prices = [2,4,1]
# sub_prices = 0
# sub_ind_prices = 0
# len_prices = len(prices)
# max_ind_prices = prices.index(max(prices)) + 1
# max_prices = max(prices)
# print(max_prices)
# print(max_ind_prices)
# # print(prices[:max_ind_prices-1])
# min_ind_prices = prices.index(min(prices[:max_ind_prices-1]))
# min_prices = min(prices[:max_ind_prices-1])
# print(min_ind_prices)
# print(min_prices)
# print("min value",min_prices, ", position :",min_ind_prices+1)
# # print("max value",max_prices, ", position :",max_ind_prices+1)
# print("min index",min_ind_prices+1)
# print("length",len_prices)
# if min_ind_prices+1 == len_prices:
#     print(0)
# else:    
#     a = prices[min_ind_prices+1:] 
#     sub_prices = max(a)
#     sub_ind_prices = a.index(max(a))+min_ind_prices+1
#     print(sub_prices)
#     print(sub_ind_prices)
#     if min_ind_prices < sub_ind_prices:
#         print(sub_prices-min_prices) 
# 
#    
#           0,1,2,3,4,5
# prices = [7,1,5,3,6,4]
# prices = [2,4,1]
# if not prices:
#     return 0
# maxProfit = 0
# minPurchase = prices[0]
# for i in range(1, len(prices)):		
#     maxProfit = max(maxProfit, prices[i] - minPurchase)
#     minPurchase = min(minPurchase, prices[i])
# return maxProfit
'''
1st - maxProfit = max(0, 1-7) = 0, minPurchase = min(7,1) = 1
2nd - maxProfit = max(0, 5-1) = 4, minPurchase = min(1,5) = 1
3rd - maxProfit = max(4, 3-1) = 4, minPurchase = min(1,3) = 1
4th - maxProfit = max(4, 6-1) = 5, minPurchase = min(1,6) = 1
5th - maxProfit = max(5, 4-1) = 5, minPurchase = min(1,4) = 1
'''

# s = "abcabcabcabc"
# print(len(s))
# s = "aba"
# s = "ababab"
# s = "abc"
# val = set()
# s1 = "" + s[0]
# if len(s) <= 2:
#     print(True)
# else:    
#     for i in range(1,len(s)):
#         if s[i] != s[0]:
#             s1 = s1 + s[i]    
#         else:
#             break
#     # print(s1)
#     for i in range(0,len(s1)):
#         cnt = s.count(s1[i])
#         # print(cnt)
#         val.add(cnt)
#     if len(val)==1:
#         print(True)
#     else:
#         print(False) 
# if s1 in s:
#     print(True)
# else:
#     print(False)             
# for i in range(1,len(s)):
#     if s[i] != sa:
#         sa = sa + s[i]

# combined = "".join( (s[1:], s[:-1]) )
# print(s[1:])
# print(s[:-1])
# print(combined)
# print(s in combined) 
# 
# ----------------------------------------------------------------------------------------------------------
# nums = [2,2,1,1,1,2,2]
# # nums = [3,2,3] 
# val = set(nums) 
# print(val) 
# for i in val:
#    if nums.count(i) > len(nums)//2:
#       print(i)

# nums = [2,2,1,1,1,2,2]
# nums = [3,2,3] 
# val = set(nums)
# print(val) 
# val1 = []
# key1 = []
# for i in val:
#     key1.append(i)
#     val1.append(nums.count(i))
# print(key1)
# print(val1)
# dict1 = {k:v for k,v in zip(key1,val1)}
# print(dict1)
# print(max(dict1))


# import math

# n = 4
# a = 0
# b = 1

# for i in range(n):
#     a,b = b,a+b
# print(b) 

# n = 5
# ans = []
# for i in range(0,n+1):
#     val = bin(i)
#     ans.append(val.count('1'))

# print(ans)


# n = 5
# Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
# n = 3
# Output: [[1],[1,1],[1,2,1]]

# nums = [0,1,0,3,12]
# # nums = [0,0,1]
# cnt = 0
# ind = 0
# print(nums)
# for i in range(0,len(nums)):
#     if nums[i]!=0:
#         nums[i],nums[ind] = nums[ind], nums[i]
#         ind+=1
# print(nums)

# nums1 = nums.count(0)
# nums = list(filter(lambda x: x != 0 , nums))
# for i in range(0,nums1):
#     nums.append(0)
# for i in range(len(nums)):
#     if i != 0:
#         nums[ind] = i
#         ind += 1
# print(nums)        
# while ind < len(nums):
#     nums[ind] = 0
#     ind+=1          
# print(nums)
# print(nums1)


# cn = 200
# # out = "A"
# Num = {1: "A",2: "B",3: "C",4: "D",5: "E",6: "F",7: "G",8: "H",9: "I",10: "J",11: "K",12: "L",13: "M",14: "N",
#     15: "O",16: "P",17: "Q",18: "R",19: "S",20: "T",21: "U",22: "V",23: "W",24: "X",25: "Y",26: "Z",
# }

# if cn<len(Num)+1:
#     str1 = Num[cn]
# elif cn > len(Num)+1:
#     rem = cn%26
#     div = cn//26
#     str1 = Num[div]+Num[rem]
# print(str1)


# nums = [1,3,5,6]
# # nums = [1,3]
# # nums = [1]
# target = 2
# ind = 0

# for i in range(0, len(nums)):
#     if target == nums[i]:
#         ind = i
#     elif nums[i] > target > nums[i-1]:
#         ind = i    
#     elif target>nums[i]:
#         ind = i+1
# print(ind) 
# 
# 

# import math
# x = 9
# # x = int(math.sqrt(4))
# x = int(x ** 0.5)
# print(x) 



#
# val = input("Enter a Valid Character : ")
# ans = print(True) if val in 'aeiouAEIOU' else print(False)


# d = [1,2,3]
# d = [4,3,2,1]
# d = [9]
# d[-1] += 1
# if d[-1]>9:
#     d[-1] = ','.split(d)
# print(d)


# s = "nikhil"
# # s = ".".join(s)
# s = s.split(" ")
# print(s)

# d = [4,3,2,9]
# d = [1,2,3]
# d = [10]
# d[-1] += 1
# print(d)
# d1 = d[-1]
# if d1>9:
#     d.remove(d[-1])
#     d2 = d1//10 
#     d.append(d2)
#     d3 = d1%10
#     d.append(d3)   
# print(d)

# d = [1,2,3]
# d = [9,9]
# d1  = [str(x) for x in d]
# print(d1)
# d1 = "".join(d1)
# d1 = int(d1)
# print(type(d1))
# print(d1)
# d1 = d1+1
# print(d1)
# d1 = str(d1)
# d1 = [int(x) for x in d1]
# print(d1)

# print(d)            
# print(t)            
# print(s)            
# print(d)        
# if d == s:
#     print(True)
# else:
#     print(False)                

# c_t = 0
# c_f = 0
# for i in range(len(s)):
#     # for j in range(len(t)):
#         if s[:i] in t[:]:
#                 c_t +=1
#         else:
#                  c_f += 1   
# if c_t>0:
#      print(True)
# else:
#      print(False)



# n = [2,7,11,15]
# t = 9

# n = [3,2,4]
# t = 6

# p = n[0]
# for i in range(len(n)):
#     for j in range(1,len(n)):
#      if n[i]+n[j] == t:
#         print(i,j)


# s = "axc"
# t = "ahbgdc"
# s = "abc"
# t = "ahbgdc"
# s = "ab"
# t = "baab"
# m = ""
# sub = 0
# for j in range(len(s)):
# for i in range(len(t)):
#         if t[i] not in s[:]:
#         # if s[j] != t[i]:
#             m = m+t[i]
# t = t.translate({ord(i): None for i in m})       
# print(t)
# print(True) if s[:] == t[:] else print(False)


# i = 0
# j = 0
# while i<len(s) and j<len(t):
#     if s[i] == t[j]:
#         i+=1
#     j+=1
# print(i==len(s))        



# s = "Hello World"
# s = "luffy is still joyboy"
# s = "   fly me   to   the moon  "
# p = ""   
# s = s[::-1]
# s1 = ""
# print(s)
# j = 0
# while j  != " ":
#     if s[j] ==  " ":
#         j+=1
#     else :
#         break    
# s = s[j:]
# print(s)    
# for i in s:
#     if " " not in i:
#         p = p+i
#     else:
#         break 
# print(len(p[::-1]))   
# 



# nums = [-1,0,3,5,9,12]
# target = 9 
# print(nums.index(target)) if target in nums else print(-1)
# i = (10,20,30,40,50)
# tup = tuple(input().split(" "))
# t = int(input())
# i = tup[:t]+tup[t+1:]
# print(i)
# i = (x for x in i if i.index(x)!=t)
# for a in i:
#  print(a)


# from queue import Queue
# olympics = Queue(5)
# olympics.put('United States(USA)')
# olympics.put('Great Britain(GBR)')
# print(olympics.empty())



# nums = [4,1,2,1,2]
# Output: 4
# nums = [2,2,1]
# Output: 1
# i = 1
# for i in range(0,len(nums)):
#     if nums.count(nums[i]) == 1:
#         print(nums[i])
# print(d)
# print(pi)



# a = input("Enter string :")
# a = "H@e^ll$o"
# # output = "o@l^l$eH"
# a= list(a)
# print(a)
# i = 0
# j = len(a)-1
# while i<j:
#     if not a[i].isalpha():
#         i+=1
#     elif not a[j].isalpha():
#         j-=1
#     else:
#         a[i],a[j] = a[j],a[i] 
#         i+=1
#         j-=1
# a = ''.join(a)               
# print(a)


# a = list(a)
# st = "The quick brown fox jumps over the lazy dog"
# alpha = "abcdefghijklmnopqrstuvwxyz"
# st = st.lower()
# print(st)
# st = "".join(filter(str.isalpha, st))
# print(st)
# ct,cf =0,0
# for i in range(len(st)):
#     if st[i] in alpha:
#         ct +=1
#     else:
#         cf +=1
# # print(ct)        
# # print(cf)        
# if cf>0:        
#     print(False)   
# else:
#     print(True)   


# x = "Sugan@24#18y3a"
# x = "Nikh26@6&17"
# outp : 84312  
# x = " ".join(filter(str.isdigit, x))
# x = x.split(" ")
# x.sort(reverse=True)
# x = int(''.join(x))
# print(x)


# s = "getting good at coding needs a lot of practice"
# s = "i like this program very much"
# s = s[::-1].split(" ")
# print(s)
# for i in s:
#     i = i[::-1]
#     print(i, end=" ")


# //anagram    
# s = "abcd"
# a = "dabc"
# s = s[:-1] + s[1:]
# print(s)
# if sorted(s)==sorted(a) :
#     print(True)
# else:
#     print(False) 
 
   
# import functools as f
# dic = {"rhdt":246,"ghftd":1246}
# for i in dic:
#     # print(dic[i])
#     dic[i] = [int(x) for x in str(dic[i])]
#     # print(dic[i])
#     sq = list(map(lambda x:x*x, dic[i]))
#     # print(sq)
#     se = f.reduce(lambda x,y: x+y, sq)
#     # print(se)
#     if se%2==0:
#         i = i[-1] + i[0:-1]
#         print(i)
#     elif se%2!=0:
#         i = i[2:] + i[0:2]
#         print(i)      


# import functools as f
# dic = {"Abhishek" : 34848, "Mayur" : 4739, "Friends" : 2949, "Yeah" : 9889}
# li = []
# for i in dic:
#     len1 = len(i)
#     s = [int(x) for x in str(dic[i])]
#     s1 = list(filter(lambda x:x<=len1, s))
#     print(max(s1), i[max(s1)-1]) if s1!=[] else print(None, 'X')


# x = "3$5&^*7264&"
# x = "".join(filter(str.isdigit, x))
# print(x)
# e = "".join(filter(lambda x:int(x)%2==0, x))
# o = "".join(filter(lambda x:int(x)%2!=0, x))
# for x,y in zip(o,e):
#     r = x+y
#     print(r, end="") 


# s = ['abc', 'xyz', 'aba', '1221', '6876']
# cnt = 0
# for i in s:
#     if len(i)>=2 and i[0]==i[-1]:
#         cnt+=1
# print(cnt) 
 
 
# lst=[10,20,30,20,10,50,60,40,50,40]
# lst = set(lst)
# print(list(lst))      


# lst = ['s', 'd', 'f', 's', 'd', 'f', 's', 'f', 'k', 'o', 'p', 'i', 'w', 'e', 'k', 'c']
# inp = input("Enter your character : ")
# i = len(lst)-1
# while i>=0:
#     if inp == lst[i]:
#         print(i)
#         break   
#     i-=1

# import re
# s = "abcd"
# t = "abcde"

# print(re.match(r"a", t))

# def __init__(self)
#   n= input("Enter employee Number: ")
#   i=0
#   while i<n:
#     super().__init()
#     self.__pglan=input("Enter Domain:")

# nums = [3,1,2,4]
# Output: [2,4,3,1]
# even = []
# odd = []
# r = []
# for i in range(len(nums)):
#     if nums[i]%2==0:
#         even.append(nums[i])
#     else:
#         odd.append(nums[i])    
# r = even + odd
# print(even)
# print(odd)
# print(r)


# s = ["h","e","l","l","o"]
# # Output: ["o","l","l","e","h"]
# print(len(s))
# for i in range(int(len(s)/2)):
#     s[len(s)-i-1],s[i] = s[i],s[len(s)-i-1]
# print(s)


# s = "leetcode"
# v = ['a','e','i','o','u']
# # Output: "leotcede"
# i = 0
# j = len(s)-1
# s = list(s)
# while i<j:
#     if s[i] not in v:
#         i+=1
#     elif s[j] not in v:
#         j-=1
#     else:
#         s[i],s[j] = s[j],s[i] 
#         i+=1
#         j-=1
# s = ''.join(s)               
# print(s)


# nums1 = [4,9,5]
# nums2 = [9,4,9,8,4]
# Output: [9,4]


# nums1 = [1,2,2,1]
# nums2 = [2,2]
# # Output: [2]
# arr = []
# if len(nums1)>len(nums2):
#     nums2 = set(nums2)
#     for i in nums2:
#         if i in nums1:
#             arr.append(i)
# elif len(nums2)>len(nums1) :
#     nums1 = set(nums1)
#     for i in nums1:
#         if i in nums2:
#             arr.append(i)           
# print(arr)           

# num = int(input("enter any number : "))
# num = str(num)
# num = reversed(num)
# for i in num:
#     print(i,end="")
# print(num)

# num = int(input("number : "))
# ans = pow(num,3)
# print(ans)