
# # class Node:
# #     # Initalisation of node
# #     def __init__(self,data):
# #         self.data = data
# #         self.next = None
# # class Linkedlist:
# #     def __init__(self):
# #         self.head = None
# #     def insertAtBgin(self, data):
# #         new_node = Node(data)
# #         if self.head is None:
# #             self.head = new_node
# #             return
# #         else:
# #             new_node.next = self.head
# #             self.head = new_node 
# #     def insertAtIndex(self,data,index):
# #         new_node = Node(data)
# #         current_node = self.head
# #         position = 0  
# #         if position == index:
# #             current_node = self.insertAtBgin(data)
# #         else:
# #             while(current_node!=None and position+1!=index):
# #                 position = position+1
# #                 current_node = current_node.next
# #             if current_node!=None:
# #                 new_node.next = current_node.next
# #                 current_node.next = new_node
# #             else:
# #                 print("Index not found")
# #     def insertAtEnd(self, data):         
# #         newNode = Node(data)
# #         if self.head is None:
# #             self.head = newNode
# #             return
# #         else:
# #             current = self.head
# #             while(current.next != None):
# #                 current = current.next
# #             current.next = newNode  
# #     def dltNode(self):
# #         if self.head is None:
# #             print("list is empty") 
# #         else:
# #             self.head = self.head.next
# #     def traverse(self):
# #         if self.head is None:
# #             print("list is empty")
# #         else:
# #             current = self.head
# #             while current!=None:
# #                 print(self.data, end = ' ')
# #                 current = current.next                 


# class Node:
#     def __init__(self,data):
#         self.data = data
#         self.next = None
# class LinkedList:
#     def __init__ (self):
#         self.head = None
#     def insertAtbegin(self, data):
#         newNode = Node(data)
#         if self.head is None:
#             self.head = newNode
#             return           
#         else:
#             newNode.next = self.head
#             self.head = newNode
#     def traverse(self):
#         if self.head is None:
#             print("list is empty") 
#         else:
#             current = self.head
#             while current != None:
#                 print(current.data, end = ' ')
#                 current = current.next
# l1 = Node(1)
# l1 = LinkedList()
# l1.insertAtbegin(1)
# l1.insertAtbegin(2)                      
# l1.insertAtbegin(3)                      
# l1.insertAtbegin(4)
# l1.traverse()                      