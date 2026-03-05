import pyautogui
import pyperclip
import time

pyautogui.PAUSE = 1.5

pyautogui.press("win")
pyautogui.write("whatsapp")
pyautogui.press("enter")

time.sleep(5) 

pyautogui.click(x=438, y=258)

time.sleep(1)

pyperclip.copy("Pai")
pyautogui.hotkey("ctrl", "v")

time.sleep(2)  
pyautogui.press("enter")

time.sleep(1)

pyperclip.copy("Bom dia")
pyautogui.hotkey("ctrl", "v")
pyautogui.press("enter")


pyperclip.copy("Tas fazendo o que?")
pyautogui.hotkey("ctrl", "v")
pyautogui.press("enter")

pyperclip.copy("Ta vendo anime né? hmmmmm")
pyautogui.hotkey("ctrl", "v")
pyautogui.press("enter")

pyperclip.copy("Tô de zoios")
pyautogui.hotkey("ctrl", "v")
pyautogui.press("enter")