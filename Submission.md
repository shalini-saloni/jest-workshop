# Jest Workshop Submission

## Student Details
- Name: Shalini Saloni
- Roll Number: 2024-B-27012005A
- GitHub Username: shalini-saloni

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: Invalid subtotal should throw error
**What it protects against:**  
Prevents incorrect calculations when the subtotal is not a valid number such as string, NaN, or negative value.
---

### 2. Test Name: No coupon applies correct default pricing
**What it protects against:**  
Ensures the function works correctly when no coupon is applied and only default rules like 5% discount above ₹1000 are used.
---

### 3. Test Name: SAVE10 coupon should give 10% discount
**What it protects against:**  
Verifies that the SAVE10 coupon gives a 10% discount but does not exceed the maximum allowed discount of ₹100.
---

### 4. Test Name: FLAT50 coupon boundary case
**What it protects against:**  
Ensures the flat discount does not result in a negative final amount when the subtotal is less than ₹50.
---

### 5. Test Name: Coupon should be case-insensitive
**What it protects against:**  
Prevents failures due to coupon code casing differences such as save10, SAVE10, Save10.
---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes 
- GitHub Actions Run URL: https://github.com/shalini-saloni/jest-workshop/actions/runs/21825049119

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

