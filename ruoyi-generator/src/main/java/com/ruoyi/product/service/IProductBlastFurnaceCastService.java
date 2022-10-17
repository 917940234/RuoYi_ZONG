package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceCast;

/**
 * 出铁时间计控Service接口
 * 
 * @author zongyoucheng
 * @date 2022-10-11
 */
public interface IProductBlastFurnaceCastService 
{
    /**
     * 查询出铁时间计控
     * 
     * @param blastFurnaceCastId 出铁时间计控主键
     * @return 出铁时间计控
     */
    public ProductBlastFurnaceCast selectProductBlastFurnaceCastByBlastFurnaceCastId(Long blastFurnaceCastId);

    /**
     * 查询出铁时间计控列表
     * 
     * @param productBlastFurnaceCast 出铁时间计控
     * @return 出铁时间计控集合
     */
    public List<ProductBlastFurnaceCast> selectProductBlastFurnaceCastList(ProductBlastFurnaceCast productBlastFurnaceCast);

    /**
     * 新增出铁时间计控
     * 
     * @param productBlastFurnaceCast 出铁时间计控
     * @return 结果
     */
    public int insertProductBlastFurnaceCast(ProductBlastFurnaceCast productBlastFurnaceCast);

    /**
     * 修改出铁时间计控
     * 
     * @param productBlastFurnaceCast 出铁时间计控
     * @return 结果
     */
    public int updateProductBlastFurnaceCast(ProductBlastFurnaceCast productBlastFurnaceCast);

    /**
     * 批量删除出铁时间计控
     * 
     * @param blastFurnaceCastIds 需要删除的出铁时间计控主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceCastByBlastFurnaceCastIds(String blastFurnaceCastIds);

    /**
     * 删除出铁时间计控信息
     * 
     * @param blastFurnaceCastId 出铁时间计控主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceCastByBlastFurnaceCastId(Long blastFurnaceCastId);
}
