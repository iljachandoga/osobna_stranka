# 🦴 Ortopedické študijné texty

Jednoduchá statická webová stránka pre študijné materiály z ortopédie.

## 📂 Štruktúra
- `index.html` – hlavná stránka s navigáciou
- `texty/` – priečinok s HTML textami (hlava, chrbtica, končatiny)
- `style.css` – štýly
- `script.js` – JavaScript pre načítanie textov
- `Dockerfile` – pre deploy cez Coolify (Nginx)

## 🚀 Deploy
1. Nahraj repozitár na GitHub  
2. V **Coolify**:
   - Vyber *New App*  
   - Prepoj s GitHub repozitárom  
   - Buildpack: **Dockerfile**  
   - Port: **80**  
3. Deploy – stránka sa spustí na tvojom RPI (napr. cez Cloudflare Tunnel).
