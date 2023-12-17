const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  createPrediction,
  createVipPrediction,
  createFreeTip,
  createUpcoming,
  getJackpot,
  createJackpotPrediction,
  getFreeExpert,
  getVipDailyTen,
  getSupreme,
  getBankerOfTheDay,
  getVipMega,
  createVipSupremePrediction,
  createSinglePrediction,
  createDailyTenPrediction,
  createBetOfTheDay,
  createVipExpertPrediction,
  createVipSinglePrediction,
  createVipInvestmentsPrediction,
  createVipMegaPrediction,
  updatePrediction,
  getPrediction,
  getBetOfTheDay,
  getUpcoming,
  getPredictions,
  getFreeTips,
  getVipPredictions,
  getPredictionInCategory,
  deletePrediction,
  createBankerPrediction,
} = require("../controllers/predictionController");
const { protect } = require("../middleware/authMiddleware");

router.route("/:date").get(getPredictions);
router.route("/single/:id").get(getPrediction);
router.route("/tips/:value/:date").get(getFreeTips);
router.route("/vipPredictions/:value/:date").get(getVipPredictions);
router.route("/upcomingPredictions/:value/:date").get(getUpcoming);
router.route("/vipSupreme/:value/:date").get(getSupreme);
router.route("/vipMega/:value/:date").get(getVipMega);
router.route("/jackpot-predictions/:value/:date").get(getJackpot);
router.route("/bet/:value/:date").get(getBetOfTheDay);
router.route("/bankerPrediction/:value/:date").get(getBankerOfTheDay);
router.route("/daily-ten-prediction/:value/:date").get(getVipDailyTen);
router.route("/free-expert/:value/:date").get(getFreeExpert);
router.route("/create").post(protect, createPrediction);

router
  .route("/create/:vip")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createVipPrediction
  );

router
  .route("/create/mega/:vipMega")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createVipMegaPrediction
  );

router
  .route("/create/freeExpert/:expert")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createVipExpertPrediction
  );

router
  .route("/create/daily/:dailyTen")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createDailyTenPrediction
  );

router
  .route("/create/supremeVip/:supreme")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createVipSupremePrediction
  );

router
  .route("/create/singleTip/:single")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createSinglePrediction
  );

router
  .route("/create/jackpot-prediction/:jackpot")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createJackpotPrediction
  );

router
  .route("/create/banker-predictions/:banker")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createBankerPrediction
  );

router
  .route("/create/investments/:vipInvestments")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createVipInvestmentsPrediction
  );

router
  .route("/create/singleVip/:single")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createVipSinglePrediction
  );

router
  .route("/create/tip/:freeTip")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createFreeTip
  );

router
  .route("/create/upcoming/:upcoming")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createUpcoming
  );

router
  .route("/create/bet/:betOfTheDay")
  .post(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    createBetOfTheDay
  );

router
  .route("/update/:id")
  .put(
    protect,
    upload.fields([
      { name: "leagueIcon" },
      { name: "teamAIcon" },
      { name: "teamBIcon" },
    ]),
    updatePrediction
  );
router.route("/delete/:id").delete(protect, deletePrediction);
router.route("/prediction/:value/:date").get(getPredictionInCategory);

module.exports = router;
