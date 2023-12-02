/**
 * @swagger
 * components:
 *   schemas:
 *     Farmer:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           description: The id of the Farmer
 *         name:
 *           type: string
*            description: The name of the Farm
 *         coffeeVariants:
 *           type: string
 *           description: Kaffee Sorte
 *         languageCode:
 *           type: string
 *           description: Welche Sprache der Farmer spricht
 *         Company:
 *           type: Company
 *           description: Zugewiesene Company des Farmers
 *       example:
 *         id: 1
 *         name: Tobias
 *         coffeVariants: Espresso
 *         languageCode: de
 *         Company: Nestle
 */