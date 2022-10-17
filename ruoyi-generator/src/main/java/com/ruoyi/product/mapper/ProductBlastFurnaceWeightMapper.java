package com.ruoyi.product.mapper;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceWeight;

/**
 * 出铁重量预测Mapper接口
 * 
 * @author zongyoucheng
 * @date 2022-10-11
 */
public interface ProductBlastFurnaceWeightMapper 
{
    /**
     * 查询出铁重量预测
     * 
     * @param blastFurnaceWeightId 出铁重量预测主键
     * @return 出铁重量预测
     */
    public ProductBlastFurnaceWeight selectProductBlastFurnaceWeightByBlastFurnaceWeightId(Long blastFurnaceWeightId);

    /**
     * 查询出铁重量预测列表
     * 
     * @param productBlastFurnaceWeight 出铁重量预测
     * @return 出铁重量预测集合
     */
    public List<ProductBlastFurnaceWeight> selectProductBlastFurnaceWeightList(ProductBlastFurnaceWeight productBlastFurnaceWeight);

    /**
     * 新增出铁重量预测
     * 
     * @param productBlastFurnaceWeight 出铁重量预测
     * @return 结果
     */
    public int insertProductBlastFurnaceWeight(ProductBlastFurnaceWeight productBlastFurnaceWeight);

    /**
     * 修改出铁重量预测
     * 
     * @param productBlastFurnaceWeight 出铁重量预测
     * @return 结果
     */
    public int updateProductBlastFurnaceWeight(ProductBlastFurnaceWeight productBlastFurnaceWeight);

    /**
     * 删除出铁重量预测
     * 
     * @param blastFurnaceWeightId 出铁重量预测主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceWeightByBlastFurnaceWeightId(Long blastFurnaceWeightId);

    /**
     * 批量删除出铁重量预测
     * 
     * @param blastFurnaceWeightIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceWeightByBlastFurnaceWeightIds(String[] blastFurnaceWeightIds);
}
