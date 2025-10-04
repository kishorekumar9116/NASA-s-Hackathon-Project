import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

# -----------------------------
# 1. Load Weather Dataset
# -----------------------------
# Example dataset: Date, Temperature, Humidity
# Replace with your actual dataset or API data
data = {
    "Day": np.arange(1, 15),  # 14 days of data
    "Temperature": [30, 31, 29, 28, 32, 33, 34, 35, 36, 34, 33, 32, 31, 30],  # °C
    "Humidity": [60, 62, 58, 65, 64, 63, 61, 60, 59, 62, 64, 66, 65, 63]      # %
}

df = pd.DataFrame(data)

# -----------------------------
# 2. Train Model (Predict Temperature)
# -----------------------------
X = df[["Day"]]   # Feature
y = df["Temperature"]  # Target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)

model = LinearRegression()
model.fit(X_train, y_train)

# -----------------------------
# 3. Evaluate Model
# -----------------------------
y_pred = model.predict(X_test)
print("MAE:", mean_absolute_error(y_test, y_pred))

# -----------------------------
# 4. Forecast Next 7 Days
# -----------------------------
future_days = np.arange(15, 22).reshape(-1, 1)  # Days 15 to 21
future_pred = model.predict(future_days)

print("\nPredicted Weather for Next 7 Days:")
for day, temp in zip(range(15, 22), future_pred):
    print(f"Day {day}: {temp:.2f} °C")

# -----------------------------
# 5. Plot Results
# -----------------------------
plt.figure(figsize=(8,5))
plt.scatter(df["Day"], df["Temperature"], color="blue", label="Actual Data")
plt.plot(df["Day"], model.predict(df[["Day"]]), color="red", label="Model Prediction")
plt.plot(future_days, future_pred, color="green", linestyle="dashed", label="Future Forecast")
plt.xlabel("Day")
plt.ylabel("Temperature (°C)")
plt.legend()
plt.title("Weather Prediction (Past + Future)")
plt.show()
