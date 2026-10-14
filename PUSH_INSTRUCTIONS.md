# วิธีอัปโหลดไฟล์ขึ้น GitHub (ง่ายที่สุด)

## ขั้นตอนที่ 1: สร้าง Repository บน GitHub

1. เปิดเว็บไปที่ **[GitHub.com](https://github.com)**
2. คลิก **+** (มุมขวาบน) → **New repository**
3. ตั้งชื่อ repository (เช่น `map-editor`)
4. เลือก **Public**
5. **ไม่ต้อง** ติ๊ก: Add a README file, .gitignore, license
6. คลิก **Create repository**

## ขั้นตอนที่ 2: อัปโหลดไฟล์ (เพียง 3 คำสั่ง)

หลังจากสร้าง repository แล้ว GitHub จะแสดงคำสั่งให้ ให้คุณทำตามนี้:

### เปิด PowerShell หรือ Command Prompt
1. กดปุ่ม **Windows** + **R**
2. พิมพ์ `powershell` แล้วกด Enter

### รันคำสั่งทีละบรรทัด:

```bash
cd C:\Users\User\Windsurf
```

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```
*(แทนที่ `YOUR_USERNAME` ด้วยชื่อ user ของคุณ และ `YOUR_REPO` ด้วยชื่อ repository ที่สร้าง)*

```bash
git branch -M main
```

```bash
git push -u origin main
```

## ตัวอย่างจริง:

ถ้าชื่อ user ของคุณคือ `myname` และชื่อ repository คือ `course-builder` ให้ใช้:

```bash
cd C:\Users\User\Windsurf
git remote add origin https://github.com/myname/course-builder.git
git branch -M main
git push -u origin main
```

## ขั้นตอนที่ 3: เปิดใช้งาน GitHub Pages

1. ไปที่ repository บน GitHub
2. คลิก **Settings** → **Pages**
3. **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. คลิก **Save**

## ขั้นตอนที่ 4: เข้าใช้งาน

- รอ 1-2 นาที
- หน้า Settings → Pages จะแสดง URL เช่น `https://myname.github.io/course-builder/`
- คลิกเข้าใช้งานได้เลย! 🎉

---

## ถ้ารัน `git push` แล้วถาม username/password

ถ้าใช้ HTTPS และถาม login:
- **Username**: ชื่อ user ของคุณบน GitHub
- **Password**: ใช้ **Personal Access Token** (ไม่ใช่ password ปกติ)

### วิธีสร้าง Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. คลิก **Generate new token (classic)**
3. ติ๊ก `repo` (scopes)
4. คลิก **Generate token**
5. คัดลอก token มาใช้เป็น password

---

## ไฟล์ที่อัปโหลดแล้ว:
✅ index.html (ไฟล์หลัก)
✅ README.md (ภาษาไทย)
✅ README_EN.md (ภาษาอังกฤษ)
✅ AGENTS.md (Project settings)
✅ DEPLOY.md (Deployment guide)
✅ .gitignore

ทุกอย่างพร้อมแล้วครับ!
