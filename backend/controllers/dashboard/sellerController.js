const sellerModel = require("../../models/sellerModel");
const { responseReturn } = require("../../utils/response");

class sellerController {
  get_seller_request = async (req, res) => {
    const { page, searchValue, perPage } = req.query;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      if (searchValue) {
        // const sellers
      } else {
        const sellers = await sellerModel
          .find({ status: "pending" })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalSeller = await sellerModel
          .find({ status: "pending" })
          .countDocuments();
        responseReturn(res, 200, { totalSeller, sellers });
      }
    } catch (error) {}
  };
}

module.exports = new sellerController();
