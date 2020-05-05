תרגול Full Stack

צרו אתר המציג מאכלים ומאפשר להוסיף מתכון למאכל.
מסד הנתונים - MONGO:

Meals mysql
dishes:
dishID
dishName

Recepies:
{recepie_id : auto}
dishID FK
chefName
recepName
ingredients
preperation

• טבלת מאכלים:
◦ קוד מאכל (מפתח ראשי – מספור אוטומטי רץ)
◦ שם מאכל (טקסט חופשי)
• טבלת מתכונים:
◦ קוד מתכון (מפתח ראשי – מספור אוטומטי רץ)
◦ קוד מאכל (מפתח זר לעמודת קוד מאכל בטבלת מאכלים)
◦ שם המשתמש שהוסיף את המתכון (טקסט חופשי)
◦ שם המתכון (טקסט חופשי)
◦ מצרכים (טקסט חופשי)
◦ אופן ההכנה (טקסט חופשי)
יש להוסיף מספר מאכלים דרך ממשק MySQL לטבלת המאכלים.

שרת – Node.js:
• Route להחזרת כל המאכלים:
GET http://localhost:3001/api/dishes
• Route המקבל קוד מאכל ומחזיר את כל המתכונים הקיימים רק עבור המאכל הזה:
GET http://localhost:3001/api/recipes-per-dish/7
• Route להוספת מתכון חדש:
POST http://localhost:3001/api/recipes

לקוח – React:
• מאפשר:
◦ בחירת מאכל מתיבת גלילה (תגית select)
◦ צפייה במתכונים של המאכל שנבחר
◦ הוספת מתכון חדש למאכל שנבחר
• אפשר לחלק למספר דפים ואפשר לבצע הכל בדף אחד
• דוגמה אפשרית ל-UI המאפשר לבצע הכל בדף אחד:

בהצלחה 


INSERT INTO `dishes` (`dishID`, `dishName`) VALUES (NULL, 'Mario delight coconut');

INSERT INTO `receps` (`recepID`, `dishID`, `chefName`, `recepName`, `ingredients`, `preperation`) VALUES (NULL, '2', 'Or Mogi', 'scrambled eggs', 'eggs, yoshi, mario, gumba', 'mix, salt, shake ,bake');