import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright';

const baseUrl = 'http://127.0.0.1:4173';
const preview = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173'], {
  stdio: 'ignore'
});

async function waitForServer(retries = 40) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 1500 });
      await browser.close();
      return;
    } catch {
      await delay(500);
    }
  }

  await browser.close();
  throw new Error('Preview server did not become ready in time.');
}

async function capture() {
  await waitForServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(`${baseUrl}/dashboard`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/1-dashboard.png', fullPage: true });

  await page.goto(`${baseUrl}/employees`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/2-employees.png', fullPage: true });

  await page.goto(`${baseUrl}/departments/hr`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/3-departments-hr.png', fullPage: true });

  await page.goto(`${baseUrl}/departments/finance`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/4-departments-finance.png', fullPage: true });

  await page.goto(`${baseUrl}/profile/101`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/5-profile-logged-in.png', fullPage: true });

  await page.click('text=Log Out');
  await page.goto(`${baseUrl}/profile/101`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/6-profile-protected.png', fullPage: true });

  await page.goto(`${baseUrl}/random-invalid-route`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/7-404.png', fullPage: true });

  await browser.close();
}

capture()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => {
    preview.kill('SIGTERM');
  });
