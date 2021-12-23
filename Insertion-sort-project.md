[22,27,16,2,18,6] -> Insertion Sort

### 1-Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

```
[22,27,16,2,18,6] -->Step 1
[2,27,16,22,18,6] -->Step 2
[2,6,16,22,18,27] -->Step 3
[2,6,16,18,22,27] -->Step 4
```

### 2- Big-O gösterimini yazınız.

```
   O(n^2)
```

### 3- Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.

```
Average case : Aradığımız sayının ortada olması.
[2,6,16,18,22,27] = 16 - 18
Worst case : Aradığımız sayının sonda olması.
[2,6,16,18,22,27] = 27
Best case : Aradığımız sayının dizinin en başında olması.
[2,6,16,18,22,27] = 2
```

### 4- Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

```
[2,6,16,-18-,22,27] = Average case
```

