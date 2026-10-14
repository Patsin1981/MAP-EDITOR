# วิธีอัปโหลดไป GitHub Pages (แบบไม่ต้องใช้ Git Command)

เนื่องจากเครื่องไม่มี Git ติดตั้ง สามารถอัปโหลดผ่านเว็บ GitHub ได้โดยตรง

## ขั้นตอนที่ 1: สร้าง Repository บน GitHub

1. เข้าไปที่ [GitHub.com](https://github.com)
2. ถ้ายังไม่มี account ให้สมัครก่อน
3. คลิกปุ่ม **+** ที่มุมขวาบน → **New repository**
4. ตั้งชื่อ repository (เช่น `course-builder`)
5. เลือก **Public** (เพื่อให้ใครก็ได้เข้าใช้งานได้)
6. **ไม่ต้อง** ติ๊ก Add a README file, .gitignore, license
7. คลิก **Create repository**

## ขั้นตอนที่ 2: อัปโหลดไฟล์

1. ในหน้า repository ที่สร้างขึ้น คลิกปุ่ม **uploading an existing file**
2. ลากไฟล์จากเครื่องมาวางในพื้นที่ upload หรือคลิก **choose your files**
3. อัปโหลดไฟล์ทั้งหมดนี้:
   - `index.html`
   - `README.md`
   - `README_EN.md` (ภาษาอังกฤษ)
   - `.gitignore`
   - `DEPLOY.md` (ไฟล์นี้)
   - `AGENTS.md` (Project settings and documentation)
4. พิมพ์ commit message (เช่น "Initial commit - Course Builder app")
5. คลิก **Commit changes**

## ขั้นตอนที่ 3: เปิดใช้งาน GitHub Pages

1. ใน repository คลิกแท็บ **Settings**
2. ที่เมนูซ้ายมือ คลิก **Pages**
3. ในส่วน **Build and deployment**:
   - **Source**: เลือก **Deploy from a branch**
   - **Branch**: เลือก `main` (หรือ `master`)
   - **Folder**: เลือก `/ (root)`
4. คลิก **Save**

## ขั้นตอนที่ 4: รอและเข้าใช้งาน

1. รอประมาณ 1-2 นาที
2. หน้า Settings → Pages จะแสดง URL ของเว็บแอป
   (เช่น `https://username.github.io/course-builder/`)
3. คลิกลิงก์เพื่อเข้าใช้งาน
4. แอปพร้อมใช้งานแล้ว! 🎉

## ถ้าต้องการแก้ไขไฟล์ในภายหลัง

### วิธีที่ 1: ผ่าน GitHub Web
1. ไปที่ repository
2. คลิกที่ไฟล์ที่ต้องการแก้
3. คลิกปุ่ม **Edit this file** (ไอคอนดินสอ)
4. แก้ไขเนื้อหา
5. พิมพ์ commit message
6. คลิก **Commit changes**
7. GitHub Pages จะอัปเดตอัตโนมัติภายใน 1-2 นาที

### วิธีที่ 2: อัปโหลดไฟล์ใหม่
1. แก้ไขไฟล์ในเครื่อง
2. ไปที่ repository บน GitHub
3. คลิก **Add file** → **Upload files**
4. อัปโหลดไฟล์ที่แก้ไขแล้ว
5. ถ้ามีไฟล์เดิม GitHub จะถามว่าจะเขียนทับหรือไม่ ให้ตอบ **Yes**
6. Commit changes

## ติดตั้ง Git (ถ้าต้องการใช้แบบ Professional)

ถ้าต้องการใช้ Git command line ในอนาคต สามารถติดตั้งได้ที่:
- Windows: [git-scm.com/download/win](https://git-scm.com/download/win)
- Mac: `brew install git` หรือ [git-scm.com/download/mac](https://git-scm.com/download/mac)
- Linux: `sudo apt install git` (Ubuntu/Debian)

หลังติดตั้งแล้วสามารถใช้คำสั่ง git เพื่อจัดการ repository ได้ง่ายขึ้น
